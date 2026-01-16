import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', comment: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Contact Page
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                      Comment
                    </label>
                    <Input
                      type="text"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 text-base md:text-lg font-semibold"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-[#6B7F69] text-white shadow-lg h-fit">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact</h2>
                <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Connect with us for any Questions.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Address</h3>
                      <p className="text-white/90 text-sm md:text-base">
                        Dilsuknagar,
                        Hyderabad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Phone</h3>
                      <p className="text-white/90 text-sm md:text-base">+91 7207667810</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                      <p className="text-white/90 text-sm md:text-base">jahanji.info@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
