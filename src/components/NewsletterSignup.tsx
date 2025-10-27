import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { showSuccess, showError } from '@/utils/toast';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showError('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      showSuccess('Successfully subscribed to our newsletter!');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <Mail size={24} />
        <h3 className="text-xl font-semibold">Stay Updated</h3>
      </div>
      <p className="text-blue-100 mb-4">
        Get the latest news, course updates, and special offers delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-100"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          ) : (
            <>
              <Send size={16} className="mr-2" />
              Subscribe
            </>
          )}
        </Button>
      </form>
    </div>
  );
}