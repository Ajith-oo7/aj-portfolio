
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

    // EmailJS credentials from Supabase secrets
    const serviceId = Deno.env.get("EMAILJS_SERVICE_ID") || "";
    const templateId = Deno.env.get("EMAILJS_TEMPLATE_ID") || "";
    const userId = Deno.env.get("EMAILJS_USER_ID") || "";
    const publicKey = Deno.env.get("EMAILJS_PUBLIC_KEY") || "";

    // Log the EmailJS credentials (without values for security)
    console.log("Credentials check:", {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasUserId: !!userId,
      hasPublicKey: !!publicKey
    });

    if (!serviceId || !templateId || !userId || !publicKey) {
      console.error("Missing EmailJS credentials in environment variables");
      return new Response(
        JSON.stringify({ error: "Server configuration error: Missing credentials" }),
        { 
          status: 500, 
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          } 
        }
      );
    }

    // Prepare the parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    // Send the email using EmailJS API with updated payload structure
    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: templateParams,
      accessToken: publicKey, // Adding public key as accessToken for authentication
    };

    console.log("Sending request to EmailJS API");
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
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
      JSON.stringify({ error: error.message }),
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
