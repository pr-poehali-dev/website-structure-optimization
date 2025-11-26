import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Heart" className="text-white" size={20} />
          </div>
          <div>
            <div className="font-bold text-lg text-[#1A1F2C]">РПА</div>
            <div className="text-xs text-gray-500">Московское отделение</div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">О отделении</a>
          <a href="#journal" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Журнал</a>
          <a href="#education" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Образование и события</a>
          <a href="#membership" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Членство и реестр</a>
          <a href="#find" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Найти психолога</a>
          <Button variant="ghost" size="sm">
            <Icon name="User" size={18} />
          </Button>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
