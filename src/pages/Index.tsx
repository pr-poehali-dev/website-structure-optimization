import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PsychologistSearch from '@/components/PsychologistSearch';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <Header />
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" className="text-primary" size={24} />
                </div>
                <CardTitle>Ассоциация</CardTitle>
                <CardDescription>
                  Миссия, цели и задачи профессионального объединения психотерапевтов Москвы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-secondary" size={24} />
                </div>
                <CardTitle>Электронный журнал</CardTitle>
                <CardDescription>
                  Научные публикации, современные подходы и исследования в области психотерапии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">
                  Перейти <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" className="text-[#0EA5E9]" size={24} />
                </div>
                <CardTitle>Образование и события</CardTitle>
                <CardDescription>
                  Конференции, супервизии, интервизии и совместные проекты с образовательным центром
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">
                  Календарь <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Ближайшие события</h2>
            <Button variant="outline">
              Смотреть весь календарь
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: '15 декабря 2024',
                format: 'Онлайн',
                title: 'Супервизия по работе с тревожными расстройствами',
                description: 'Разбор сложных клиентских случаев с ведущим супервизором',
                badge: 'Для членов',
                color: 'bg-primary'
              },
              {
                date: '20 декабря 2024',
                format: 'Очно',
                title: 'Конференция "Современные подходы в психотерапии"',
                description: 'Доклады ведущих специалистов и networking',
                badge: 'Открыто для всех',
                color: 'bg-secondary'
              },
              {
                date: '10 января 2025',
                format: 'Онлайн',
                title: 'Интервизорская группа',
                description: 'Обмен опытом и поддержка коллег',
                badge: 'Для членов',
                color: 'bg-primary'
              }
            ].map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {event.format}
                    </Badge>
                    <Badge className={`${event.color} text-white text-xs`}>
                      {event.badge}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {event.date}
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="default" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-12 flex items-center justify-center h-96">
              <div className="text-center text-white">
                <Icon name="BookOpen" size={80} className="mx-auto mb-4" />
                <div className="text-2xl font-bold">Выпуск № 4</div>
                <div className="text-lg">2024</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
                Текущий выпуск журнала
              </h2>
              <p className="text-gray-600 mb-6">
                Тема номера: Интеграция современных подходов в клинической практике
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <Icon name="FileText" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium text-[#1A1F2C]">
                      Когнитивно-поведенческая терапия депрессивных расстройств
                    </div>
                    <div className="text-sm text-gray-500">Иванова А.С., Петров В.М.</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <Icon name="FileText" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium text-[#1A1F2C]">
                      Интеграция методов при работе с травмой
                    </div>
                    <div className="text-sm text-gray-500">Сидорова Е.Н.</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <Icon name="FileText" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium text-[#1A1F2C]">
                      Супервизия как инструмент профессионального роста
                    </div>
                    <div className="text-sm text-gray-500">Кузнецов Д.П., Смирнова О.И.</div>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full md:w-auto">
                Читать выпуск
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PsychologistSearch />

      <section id="membership" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Для членов РПА
            </h2>
            <p className="text-gray-600 mb-8">
              Членство в РПА открывает доступ к профессиональному сообществу, образовательным программам, 
              супервизиям и возможность публикации в журнале. Присоединяйтесь к профессионалам!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="default">
                Преимущества членства
              </Button>
              <Button size="lg" variant="outline">
                Войти в личный кабинет
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8">Новости</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                date: '22 ноября 2024',
                title: 'Итоги осенней конференции РПА',
                excerpt: 'Более 200 специалистов приняли участие в конференции, посвященной современным подходам в психотерапии'
              },
              {
                date: '18 ноября 2024',
                title: 'Открыта регистрация на курс по КПТ',
                excerpt: 'Образовательный центр РПА запускает новый курс повышения квалификации'
              },
              {
                date: '15 ноября 2024',
                title: 'Обновление реестра специалистов',
                excerpt: 'В реестр добавлено 15 новых действительных членов ассоциации'
              },
              {
                date: '10 ноября 2024',
                title: 'Выпуск журнала №4 за 2024 год',
                excerpt: 'Вышел новый номер электронного журнала с актуальными исследованиями'
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <CardTitle className="text-base">{news.title}</CardTitle>
                  <CardDescription className="text-sm">{news.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="link">
              Все новости <Icon name="ArrowRight" size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
