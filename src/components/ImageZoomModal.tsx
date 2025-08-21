import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Image Container */}
        <div 
          className="relative bg-white rounded-lg overflow-hidden shadow-2xl animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-h-[85vh] object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageZoomModal;