
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import type { EmailJSParams } from "./types.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json() as EmailJSParams;
    
    // Log the request parameters to identify any issues
    console.log("Request received with params:", { name, email, subject, message });

    // Use the provided credentials
    const serviceId = "service_lfqzf0s";
    const templateId = "template_6wz0o6h";
    const publicKey = "NkEHgQXJYYoLba4ck";

    // Prepare the parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    // Send the email using EmailJS API
    const emailJsEndpoint = "https://api.emailjs.com/api/v1.0/email/send";
    
    console.log("Preparing EmailJS payload");
    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      public_key: publicKey,
      template_params: templateParams
    };
    
    console.log("Sending request to EmailJS API");
    const response = await fetch(emailJsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailJsPayload),
    });

    const responseText = await response.text();
    console.log("EmailJS API response status:", response.status);
    console.log("EmailJS API response:", responseText);

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${responseText || response.statusText}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  } catch (error) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "An unexpected error occurred" }),
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  }
});

