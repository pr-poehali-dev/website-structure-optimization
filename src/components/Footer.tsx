import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={20} />
              </div>
              <div>
                <div className="font-bold">РПА</div>
                <div className="text-xs text-gray-400">Московское отделение</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Российская психотерапевтическая ассоциация
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@rpa-moscow.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">О отделении</a></li>
              <li><a href="#journal" className="hover:text-white transition-colors">Журнал</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">События</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Членство</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Документы</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Правила сайта</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Устав РПА</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2024 Московское отделение Российской психотерапевтической ассоциации. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
