-- Create a table to store portfolio data
CREATE TABLE public.portfolio_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_data ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (for now, allow all authenticated users)
CREATE POLICY "Anyone can view portfolio data" 
ON public.portfolio_data 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert portfolio data" 
ON public.portfolio_data 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update portfolio data" 
ON public.portfolio_data 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_portfolio_data_updated_at
BEFORE UPDATE ON public.portfolio_data
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();