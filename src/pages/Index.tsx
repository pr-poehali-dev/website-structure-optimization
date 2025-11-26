import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Psychologist {
  name: string;
  district: string;
  approaches: string;
  specialization: string;
  experience: string;
  education?: string;
  phone?: string;
  email?: string;
  website?: string;
  format?: string;
  price?: string;
  about?: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApproach, setSelectedApproach] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedPsychologist, setSelectedPsychologist] = useState<Psychologist | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const psychologists: Psychologist[] = [
    {
      name: 'Иванова Анна Сергеевна',
      district: 'ЦАО, м. Чистые пруды',
      approaches: 'КПТ, схема-терапия',
      specialization: 'Тревожные расстройства, депрессия, панические атаки',
      experience: '12 лет',
      education: 'МГУ им. М.В. Ломоносова, клиническая психология. Сертификация по КПТ (Beck Institute)',
      phone: '+7 (926) 123-45-67',
      email: 'ivanova.psy@example.com',
      website: 'ivanova-therapy.ru',
      format: 'Онлайн и очно',
      price: 'от 5000 ₽',
      about: 'Работаю с тревожными расстройствами, депрессией и паническими атаками. В своей практике использую когнитивно-поведенческую терапию и схема-терапию. Помогаю клиентам справиться с трудными эмоциями и найти баланс в жизни.'
    },
    {
      name: 'Петров Владимир Михайлович',
      district: 'ЮЗАО, м. Проспект Вернадского',
      approaches: 'Психоанализ, глубинная терапия',
      specialization: 'Работа с травмой, кризисные состояния, отношения',
      experience: '15 лет',
      education: 'СПбГУ, клиническая психология. Институт психоанализа',
      phone: '+7 (916) 234-56-78',
      email: 'petrov.therapy@example.com',
      format: 'Очно',
      price: 'от 6000 ₽',
      about: 'Специализируюсь на психоаналитической работе с травмой, кризисными состояниями и сложностями в отношениях. Помогаю клиентам глубже понять себя и найти источники внутренних конфликтов.'
    },
    {
      name: 'Сидорова Елена Николаевна',
      district: 'САО, м. Войковская',
      approaches: 'Гештальт-терапия',
      specialization: 'Выгорание, самооценка, личностный рост',
      experience: '8 лет',
      education: 'МГППУ, консультативная психология. МИГиП, гештальт-терапия',
      phone: '+7 (925) 345-67-89',
      email: 'sidorova.gestalt@example.com',
      website: 'sidorova-psy.com',
      format: 'Онлайн и очно',
      price: 'от 4500 ₽',
      about: 'Работаю с выгоранием, вопросами самооценки и личностного роста. Помогаю клиентам найти контакт с собой, осознать свои потребности и научиться заботиться о себе.'
    },
    {
      name: 'Кузнецов Дмитрий Павлович',
      district: 'ВАО, м. Щелковская',
      approaches: 'Системная семейная терапия',
      specialization: 'Семейные конфликты, детско-родительские отношения',
      experience: '10 лет',
      education: 'МГППУ, семейная психология. Институт системных решений',
      phone: '+7 (915) 456-78-90',
      email: 'kuznetsov.family@example.com',
      format: 'Очно',
      price: 'от 7000 ₽',
      about: 'Специализируюсь на семейной терапии. Работаю с супружескими конфликтами, детско-родительскими отношениями и семейными кризисами. Помогаю семьям найти новые способы взаимодействия.'
    },
    {
      name: 'Смирнова Ольга Игоревна',
      district: 'СВАО, м. ВДНХ',
      approaches: 'Интегративный подход',
      specialization: 'Депрессия, тревога, самоидентификация',
      experience: '7 лет',
      education: 'ВШЭ, психология. Обучение КПТ, гештальт-терапии',
      phone: '+7 (926) 567-89-01',
      email: 'smirnova.integrative@example.com',
      website: 'smirnova-therapy.online',
      format: 'Онлайн и очно',
      price: 'от 4000 ₽',
      about: 'Использую интегративный подход в работе с депрессией, тревогой и вопросами самоидентификации. Помогаю клиентам понять себя и найти свой путь к изменениям.'
    },
    {
      name: 'Морозов Алексей Викторович',
      district: 'ЗАО, м. Кунцевская',
      approaches: 'КПТ, ACT-терапия',
      specialization: 'ОКР, фобии, стресс-менеджмент',
      experience: '9 лет',
      education: 'РУДН, клиническая психология. Сертификация ACT',
      phone: '+7 (916) 678-90-12',
      email: 'morozov.cbt@example.com',
      format: 'Онлайн и очно',
      price: 'от 5500 ₽',
      about: 'Работаю с обсессивно-компульсивным расстройством, фобиями и стрессом. Использую современные протоколы КПТ и терапию принятия и ответственности (ACT).'
    }
  ];

  const handleOpenDialog = (psychologist: Psychologist) => {
    setSelectedPsychologist(psychologist);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
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

      <section id="find" className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Найти психолога РПА в Москве
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Все специалисты — действительные члены Российской психотерапевтической ассоциации. 
              Информация предоставлена ими добровольно.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Input 
                  placeholder="Поиск по имени или запросу..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="md:col-span-2"
                />
                <Select value={selectedApproach} onValueChange={setSelectedApproach}>
                  <SelectTrigger>
                    <SelectValue placeholder="Направление" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kpt">КПТ</SelectItem>
                    <SelectItem value="psychoanalysis">Психоанализ</SelectItem>
                    <SelectItem value="gestalt">Гештальт-терапия</SelectItem>
                    <SelectItem value="systemic">Системная терапия</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Формат работы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Онлайн</SelectItem>
                    <SelectItem value="offline">Очно</SelectItem>
                    <SelectItem value="both">Оба формата</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {psychologists.map((psychologist, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{psychologist.name}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      РПА
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                    <Icon name="MapPin" size={14} />
                    {psychologist.district}
                  </div>
                  <div className="text-sm font-medium text-[#1A1F2C] mb-2">
                    {psychologist.approaches}
                  </div>
                  <CardDescription className="text-sm">
                    Работаю с: {psychologist.specialization}
                  </CardDescription>
                  <div className="text-xs text-gray-500 mt-2">
                    Опыт: {psychologist.experience}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleOpenDialog(psychologist)}
                  >
                    Посмотреть контакты
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              {selectedPsychologist && (
                <>
                  <DialogHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <DialogTitle className="text-2xl mb-2">
                          {selectedPsychologist.name}
                        </DialogTitle>
                        <DialogDescription className="flex items-center gap-2 text-base">
                          <Icon name="MapPin" size={16} />
                          {selectedPsychologist.district}
                        </DialogDescription>
                      </div>
                      <Badge className="bg-primary text-white">Член РПА</Badge>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Icon name="Heart" className="text-primary" size={20} />
                        О специалисте
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedPsychologist.about}
                      </p>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="GraduationCap" size={18} className="text-primary" />
                          Образование
                        </h4>
                        <p className="text-sm text-gray-600">{selectedPsychologist.education}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Clock" size={18} className="text-primary" />
                          Опыт работы
                        </h4>
                        <p className="text-sm text-gray-600">{selectedPsychologist.experience}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Lightbulb" size={18} className="text-primary" />
                        Подходы в работе
                      </h4>
                      <p className="text-sm text-gray-600">{selectedPsychologist.approaches}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Target" size={18} className="text-primary" />
                        Специализация
                      </h4>
                      <p className="text-sm text-gray-600">{selectedPsychologist.specialization}</p>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Video" size={18} className="text-primary" />
                          Формат работы
                        </h4>
                        <p className="text-sm text-gray-600">{selectedPsychologist.format}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Banknote" size={18} className="text-primary" />
                          Стоимость консультации
                        </h4>
                        <p className="text-sm text-gray-600">{selectedPsychologist.price}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Phone" size={18} className="text-primary" />
                        Контакты
                      </h4>
                      <div className="space-y-3">
                        {selectedPsychologist.phone && (
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Icon name="Phone" size={18} className="text-gray-500" />
                            <a href={`tel:${selectedPsychologist.phone}`} className="text-primary hover:underline">
                              {selectedPsychologist.phone}
                            </a>
                          </div>
                        )}
                        {selectedPsychologist.email && (
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Icon name="Mail" size={18} className="text-gray-500" />
                            <a href={`mailto:${selectedPsychologist.email}`} className="text-primary hover:underline">
                              {selectedPsychologist.email}
                            </a>
                          </div>
                        )}
                        {selectedPsychologist.website && (
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Icon name="Globe" size={18} className="text-gray-500" />
                            <a href={`https://${selectedPsychologist.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {selectedPsychologist.website}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1" size="lg">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Позвонить
                      </Button>
                      <Button variant="outline" className="flex-1" size="lg">
                        <Icon name="Mail" size={18} className="mr-2" />
                        Написать
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Смотреть всех специалистов
            </Button>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;