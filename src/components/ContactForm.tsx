
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

// Direct EmailJS integration without going through Supabase
const EMAILJS_SERVICE_ID = "service_lfqzf0s";
const EMAILJS_TEMPLATE_ID = "template_6wz0o6h";
const EMAILJS_PUBLIC_KEY = "NkEHgQXJYYoLba4ck";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = React.useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Reset success state when form is modified after successful submission
  useEffect(() => {
    const subscription = form.watch(() => {
      if (isSubmitSuccessful) {
        setIsSubmitSuccessful(false);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [form, isSubmitSuccessful]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", data);
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      // Send email directly using EmailJS API
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams
        }),
      });
      
      const responseText = await response.text();
      console.log("EmailJS API response status:", response.status);
      console.log("EmailJS API response:", responseText);
      
      if (!response.ok) {
        throw new Error(`Failed to send message: ${responseText || response.statusText}`);
      }
      
      // Show success notification with Sonner
      sonnerToast.success('Message sent!', {
        description: 'Thanks for reaching out. I\'ll get back to you soon.',
        duration: 5000,
      });
      
      // Also show shadcn toast for backwards compatibility
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      setIsSubmitSuccessful(true);
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Show error notification with Sonner
      sonnerToast.error('Message failed to send', {
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again later.",
        duration: 5000,
      });
      
      // Also show shadcn toast for backwards compatibility
      toast({
        title: "Message failed to send",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="bg-black/50 border-white/20 focus:border-neon-blue/50 text-white"
                        aria-label="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="bg-black/50 border-white/20 focus:border-neon-blue/50 text-white"
                        aria-label="Your email address"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Subject</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="What is this regarding?" 
                      {...field} 
                      className="bg-black/50 border-white/20 focus:border-neon-blue/50 text-white"
                      aria-label="Subject of your message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Your message..." 
                      {...field} 
                      className="min-h-[150px] bg-black/50 border-white/20 focus:border-neon-blue/50 text-white resize-y"
                      aria-label="Your message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: true }}
            whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white"
              disabled={isSubmitting || isSubmitSuccessful}
              aria-label={isSubmitting ? "Sending message..." : "Send message"}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  <span>Sending...</span>
                </>
              ) : isSubmitSuccessful ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Message Sent</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
