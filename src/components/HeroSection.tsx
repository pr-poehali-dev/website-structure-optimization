import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-primary text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Московское отделение Российской психотерапевтической ассоциации
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Пространство для специалистов и людей, ищущих профессиональную психологическую помощь. 
              Объединяем опыт, знания и современные подходы в психотерапии.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Стать членом РПА
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Подать статью в журнал
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Найти психолога
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-6">
              Конференции, супервизии, электронный журнал и поддержка профессионального сообщества в Москве
            </p>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon name="Users" size={120} className="text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
