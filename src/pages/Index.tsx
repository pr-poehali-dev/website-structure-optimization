import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за регистрацию! Мы отправим подтверждение на указанный email.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Конференция РПА 2025</h1>
                <p className="text-sm text-gray-600">Векторы психотерапии</p>
              </div>
            </div>
            <Button onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
              19 декабря 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Векторы психотерапии: изменения и постоянство
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ежегодная конференция Российской психотерапевтической ассоциации
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-lg">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={24} />
                <span>Московский центр инновационных технологий</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={24} />
                <span>09:00 – 18:00</span>
              </div>
            </div>
            <p className="mt-4 text-white/80">
              Москва, просп. Вернадского, 96
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              О конференции
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="text-blue-600" size={32} />
                  </div>
                  <CardTitle>Эксперты</CardTitle>
                  <CardDescription>
                    Ведущие специалисты в области психотерапии и психиатрии
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lightbulb" className="text-purple-600" size={32} />
                  </div>
                  <CardTitle>Актуальные темы</CardTitle>
                  <CardDescription>
                    Современные подходы, ИИ в психотерапии, клинические разборы
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" className="text-indigo-600" size={32} />
                  </div>
                  <CardTitle>Нетворкинг</CardTitle>
                  <CardDescription>
                    Обмен опытом с коллегами и профессиональное общение
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Программа конференции
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">09:15 – 09:45</Badge>
                    <CardTitle className="text-xl">Регистрация участников</CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-purple-600">09:40 – 10:15</Badge>
                    <CardTitle className="text-xl">Открытие конференции</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    <div className="space-y-2 mt-4">
                      <p>• Приветственные слова: Бабин С.М., Хетрик С.</p>
                      <p>• Видеообращения представителей психотерапевтических сообществ Бразилии, Индонезии</p>
                      <p>• Отчет по 2025 году – Мальцева Е.В.</p>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-indigo-600 bg-indigo-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-indigo-600">10:15 – 12:00</Badge>
                    <CardTitle className="text-2xl">Пленарное заседание</CardTitle>
                  </div>
                  <CardDescription className="text-lg font-semibold text-gray-900 mb-4">
                    «Векторы психотерапии: изменения и постоянство»
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">10:15 – 10:30</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Костюк Георгий Петрович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Профессор, д.м.н., главный врач ПКБ №1 им. Н.А. Алексеева, главный психиатр Москвы
                        </p>
                        <p className="text-blue-700 font-medium">«Психиатрия и психотерапия: опыт интеграции»</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">10:30 – 10:50</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Шумский Владимир Борисович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          К.психол.н., Высшая школа экзистенциального анализа
                        </p>
                        <p className="text-blue-700 font-medium">
                          «Современный экзистенциальный анализ: от концепции Виктора Франкла к попытке построения интегральной модели психотерапии»
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">10:50 – 11:10</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Зрютин Максим Александрович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Клинический психолог, вице-президент АКПП, сертифицированный клиницист института Бека
                        </p>
                        <p className="text-blue-700 font-medium">
                          «Концепция потребностей в когнитивно-поведенческой психотерапии»
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">11:10 – 11:30</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Ялтонская А., Гегель Н., Марьясова Д.</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Преподаватели ООО "ИСТ", схема-терапевты, КБТ терапевты
                        </p>
                        <p className="text-blue-700 font-medium">Схема-терапия и КБТ в клинической практике</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">11:30 – 11:50</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Хломов Даниил Нестерович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          К.психол.н., директор Московского гештальт института, президент АПП
                        </p>
                        <p className="text-blue-700 font-medium">
                          «Развитие и становление психотерапии в России. Путь длиной в 30 лет»
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500 bg-red-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-red-600">12:00 – 13:00</Badge>
                    <CardTitle className="text-xl">Дискуссия-баттл</CardTitle>
                  </div>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    «Искусственный интеллект в психотерапии: угроза или новый инструмент?»
                  </CardDescription>
                  <CardDescription className="text-base mt-2">
                    Самохин Д.В. (к.м.н., психотерапевт) vs Корнешов А.А. (д.эконом.н., к.псих.н.)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-gray-400">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">13:00 – 14:00</Badge>
                    <CardTitle className="text-xl">Обеденный перерыв</CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-green-600 bg-green-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-green-600">14:00 – 16:00</Badge>
                    <CardTitle className="text-xl">Параллельные секции</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                      <h3 className="text-lg font-bold mb-3 text-gray-900">Секция 1: Клинический разбор</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Руководитель:</strong> Самохин Д.В.
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Докладчик:</strong> Гаврилов Е.В., врач-психиатр НМИЦ им. В.П. Сербского
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Модератор:</strong> Шатина А.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                      <h3 className="text-lg font-bold mb-3 text-gray-900">Секция 2: Мастерская терапевтических подходов</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Интерактивный разбор клинического случая в рамках различных терапевтических школ
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Эксперты:</strong> Бегиджанова Ю. (системная семейная психотерапия), Степанова Е., Шевченко Д. (КПТ, схема-терапия)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 bg-orange-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-orange-600">16:00 – 17:00</Badge>
                    <CardTitle className="text-xl">PSY-TALKS: Личная профессиональная история</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Москвин Вячеслав Вячеславович</h4>
                    <p className="text-sm text-gray-600 mb-1">Клинический психолог, КПТ терапевт</p>
                    <p className="text-orange-700 font-medium">«Роль экспозиции в когнитивно-поведенческой психотерапии»</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Хвощевская Софья Игоревна</h4>
                    <p className="text-sm text-gray-600">Магистр психологии ВШЭ, психоаналитически ориентированный психолог</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Абрамов Сергей Владимирович</h4>
                    <p className="text-sm text-gray-600 mb-1">Врач-психиатр, психотерапевт, преподаватель НМИЦ ПН им. В.П. Сербского</p>
                    <p className="text-orange-700 font-medium">«Неблагоприятный детский опыт: от Фрейда до эпигенетики»</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 bg-purple-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-purple-600">17:00 – 17:30</Badge>
                    <CardTitle className="text-xl">Интерактивная дискуссия</CardTitle>
                  </div>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    «Цифра и человек: финал как начало диалога»
                  </CardDescription>
                  <CardDescription className="text-base mt-2">
                    Модератор: Мальцева Е.В. – директор Союза охраны психического здоровья, заместитель председателя Московского отделения РПА
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600">17:30 – 18:00</Badge>
                    <CardTitle className="text-xl">Закрытие конференции. Нетворкинг</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Регистрация на конференцию
              </h2>
              <p className="text-gray-600 text-lg">
                Заполните форму, чтобы принять участие в конференции
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">ФИО *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Иванов Иван Иванович"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (999) 123-45-67"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="organization">Организация</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Название организации"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Ваша должность"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="Дополнительная информация"
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="CheckCircle" size={20} className="mr-2" />
                    Зарегистрироваться
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@rpa-conference.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Место проведения</h3>
              <div className="text-gray-400">
                <p>Московский центр инновационных</p>
                <p>технологий в здравоохранении</p>
                <p className="mt-2">Москва, просп. Вернадского, 96</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Организаторы</h3>
              <div className="text-gray-400">
                <p>Российская психотерапевтическая</p>
                <p>ассоциация</p>
                <p className="mt-2">Московское отделение</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            © 2025 Конференция РПА. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
