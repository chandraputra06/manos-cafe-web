import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Utensils, Flame, Home as HomeIcon, Star, MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { cafeInfo, highlights, reviews } from '../data/mock';

const iconMap = {
  Coffee: Coffee,
  Utensils: Utensils,
  Flame: Flame,
  Home: HomeIcon
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1739723745132-97df9db49db2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium">Open Now · Closes 10.00 pm</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {cafeInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-gray-200">
            {cafeInfo.tagline}
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            A cozy neighborhood cafe in Renon, perfect for coffee, meals, and hanging out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={cafeInfo.menuLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cafe-brown hover:bg-cafe-dark text-white px-8 py-6 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Menu
              </Button>
            </a>
            <a href={`https://wa.me/${cafeInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cafe-dark px-8 py-6 text-lg">
                Reserve via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Info Strip */}
      <section className="bg-cafe-brown text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Renon, Denpasar</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{cafeInfo.hours}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <DollarSign className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{cafeInfo.priceRange}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
              <span className="text-sm">{cafeInfo.rating} ({cafeInfo.totalReviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-cafe-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cafe-dark mb-4">What We Offer</h2>
            <p className="text-lg text-cafe-medium max-w-2xl mx-auto">
              Experience the perfect blend of great coffee, delicious food, and warm hospitality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon];
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
                  <CardContent className="p-8">
                    <div className="bg-cafe-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cafe-brown" />
                    </div>
                    <h3 className="text-xl font-bold text-cafe-dark mb-2">{highlight.title}</h3>
                    <p className="text-cafe-medium">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular at Manos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cafe-dark mb-6">Popular at Manos Cafe Renon</h2>
              <p className="text-lg text-cafe-medium mb-4">
                People typically spend <strong>1–3.5 hours here</strong> enjoying coffee, meals, and conversations.
              </p>
              <p className="text-lg text-cafe-medium mb-6">
                Often <strong className="text-green-600">"Not too busy"</strong> and comfortable for working or meetups. Our neighborhood cafe is the perfect spot whether you're catching up with friends, working on your laptop, or simply enjoying a quiet moment with a great cup of coffee.
              </p>
              <Link to="/about">
                <Button className="bg-cafe-brown hover:bg-cafe-dark text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336"
                alt="Coffee"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                alt="Food"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1602949978634-4fe36ccc9683"
                alt="Ambiance"
                className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42"
                alt="Barista"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-cafe-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cafe-dark mb-4">What Our Customers Say</h2>
            <p className="text-lg text-cafe-medium">
              Well-rated cafe on Google with many positive reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-none">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-cafe-medium mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-cafe-dark">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cafe-dark mb-4">Find Us in Renon</h2>
            <p className="text-lg text-cafe-medium mb-2">{cafeInfo.address}</p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.23!3d-8.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDAnMTIuMCJTIDExNcKwMTMnNDguMCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Manos Cafe Location"
            />
          </div>
          <div className="text-center">
            <a href={cafeInfo.googleMapsLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cafe-brown hover:bg-cafe-dark text-white">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cafe-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Coffee or a Meal in Renon?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Visit us today and experience the warmth of your neighborhood cafe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={cafeInfo.menuLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cafe-brown hover:bg-white hover:text-cafe-dark px-8 py-6">
                View Full Menu
              </Button>
            </a>
            <a href={`https://wa.me/${cafeInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cafe-dark px-8 py-6">
                Reserve via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;