
import React from 'react';
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
import { Send, Loader2 } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';

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

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", data);
      
      // Send data to Supabase function
      const response = await fetch('https://ajnanawlfyqnwvfwhfpt.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Show success notification with Sonner (more modern toast)
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

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
