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

const PsychologistSearch = () => {
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
  );
};

export default PsychologistSearch;
