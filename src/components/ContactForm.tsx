
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
import { Send, Loader2, Settings } from 'lucide-react';
import emailjs from 'emailjs-com';

// EmailJS configuration constants - will use environment variables if available
// If not available, we'll use the values from localStorage (set by the user)
const getEmailJSCredentials = () => {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || localStorage.getItem('emailjs_service_id') || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || localStorage.getItem('emailjs_template_id') || '',
    userId: import.meta.env.VITE_EMAILJS_USER_ID || localStorage.getItem('emailjs_user_id') || '',
  };
};

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
  const [showSettings, setShowSettings] = React.useState(false);
  const [credentials, setCredentials] = React.useState(getEmailJSCredentials());
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleCredentialChange = (key: 'serviceId' | 'templateId' | 'userId', value: string) => {
    const newCredentials = { ...credentials, [key]: value };
    setCredentials(newCredentials);
    localStorage.setItem(`emailjs_${key}`, value);
  };

  const onSubmit = async (data: FormValues) => {
    // Validate EmailJS credentials before submission
    if (!credentials.serviceId || !credentials.templateId || !credentials.userId) {
      toast({
        title: "Configuration Error",
        description: "EmailJS credentials are not configured. Please add them in the settings.",
        variant: "destructive",
        duration: 5000,
      });
      setShowSettings(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        credentials.serviceId,
        credentials.templateId,
        templateParams,
        credentials.userId
      );
      
      console.log('Email sent successfully:', response);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Message failed to send",
        description: "There was an error sending your message. Please check your EmailJS configuration.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <Button 
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 text-white/70 hover:text-white hover:bg-black/30"
        onClick={() => setShowSettings(!showSettings)}
      >
        <Settings className="h-5 w-5" />
      </Button>

      {showSettings && (
        <div className="mb-6 p-4 bg-black/50 border border-white/20 rounded-lg">
          <h3 className="text-white text-lg font-semibold mb-4">EmailJS Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-1">Service ID</label>
              <Input 
                value={credentials.serviceId}
                onChange={(e) => handleCredentialChange('serviceId', e.target.value)}
                placeholder="e.g. service_abc123"
                className="bg-black/50 border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Template ID</label>
              <Input 
                value={credentials.templateId}
                onChange={(e) => handleCredentialChange('templateId', e.target.value)}
                placeholder="e.g. template_xyz789"
                className="bg-black/50 border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">User ID (Public Key)</label>
              <Input 
                value={credentials.userId}
                onChange={(e) => handleCredentialChange('userId', e.target.value)}
                placeholder="e.g. user_def456"
                className="bg-black/50 border-white/20 text-white"
              />
            </div>
            <p className="text-white/70 text-xs">
              These credentials are stored in your browser's localStorage and will persist between sessions.
            </p>
          </div>
        </div>
      )}

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
