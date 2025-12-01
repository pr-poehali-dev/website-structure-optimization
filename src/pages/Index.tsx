import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#763349]/5 to-[#763349]/10">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/files/6f236989-341e-418b-926d-cce45f0d1f8f.jpg" 
              alt="РПА Логотип" 
              className="h-10 md:h-14 w-auto"
            />
            
            <nav className="hidden md:flex items-center gap-4">
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm text-gray-700 hover:text-[#763349] transition-colors cursor-pointer"
              >
                О конференции
              </a>
              <a 
                href="#program" 
                onClick={(e) => { e.preventDefault(); document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm text-gray-700 hover:text-[#763349] transition-colors cursor-pointer"
              >
                Программа
              </a>
              <a 
                href="#speakers" 
                onClick={(e) => { e.preventDefault(); document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm text-gray-700 hover:text-[#763349] transition-colors cursor-pointer"
              >
                Спикеры
              </a>
              <a 
                href="#info" 
                onClick={(e) => { e.preventDefault(); document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm text-gray-700 hover:text-[#763349] transition-colors cursor-pointer"
              >
                Важная информация
              </a>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => window.open('https://finance.ozon.ru/apps/sbp/ozonbankpay/019a72f4-edc6-7423-abbf-5a3a4a72efcf', '_blank')}
                className="border-[#763349] text-[#763349] hover:bg-[#763349] hover:text-white text-xs"
              >
                <Icon name="Heart" size={14} className="mr-1" />
                Поддержать
              </Button>
              <Button size="sm" onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}>
                Зарегистрироваться
              </Button>
            </nav>

            <Button 
              className="md:hidden text-xs px-3"
              size="sm"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 bg-gradient-to-br from-[#4e3842] via-[#5f3846] to-[#763349] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Вызов принять: 30 лет трансформации психотерапии
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-4 md:mb-8">
              II Конференция Московского отделения Российской психотерапевтической ассоциации
            </p>
            <p className="text-xl md:text-2xl text-white mb-6 md:mb-8">
              <strong>19 декабря 2025 года встречаемся очно</strong>
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center text-sm md:text-lg">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">Московский центр инновационных технологий</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">09:00 – 18:00</span>
              </div>
            </div>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-white/80">
              Москва, просп. Вернадского, 96
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-[#4e3842] to-[#763349] text-white text-sm px-4 py-1">
                О конференции
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                Вызов принять: <br />30 лет трансформации психотерапии
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Главное событие года в профессиональном сообществе психотерапевтов. 
                Место встречи экспертов, обмена опытом и обсуждения будущего психотерапии.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#4e3842]/10 to-[#763349]/20 rounded-2xl p-8 h-full border-2 border-[#763349]/30 hover:border-[#763349] transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4e3842] to-[#763349] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="Users" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">15+ спикеров</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ведущие специалисты в области психиатрии, психотерапии и психологии. Профессора, 
                    д.м.н., президенты профессиональных ассоциаций.
                  </p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#5f3846]/10 to-[#763349]/20 rounded-2xl p-8 h-full border-2 border-[#763349]/30 hover:border-[#763349] transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5f3846] to-[#763349] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="Lightbulb" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Подходы</h3>
                  <p className="text-gray-700 leading-relaxed">
                    КПТ, схема-терапия, экзистенциальный анализ, гештальт терапия, системная семейная терапия, психоаналитическая психотерапия.
                  </p>
                </div>
              </div>

              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#4e3842]/10 to-[#5f3846]/20 rounded-2xl p-8 h-full border-2 border-[#4e3842]/30 hover:border-[#4e3842] transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4e3842] to-[#5f3846] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="MessageCircle" className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Нетворкинг</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Обмен опытом с коллегами, профессиональное общение, новые контакты 
                    и возможности для сотрудничества.
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-2 border-blue-500/30 bg-blue-50/50 hover:shadow-xl transition-shadow mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Camera" className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-xl">Для действительных членов Московского отделения РПА</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  На конференции вы сможете сделать <strong>официальное фото для сайта</strong>. 
                  Это прекрасная возможность обновить ваши профессиональные материалы и представить себя в сообществе.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon name="Target" className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-xl">Для кого конференция</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Практикующие психотерапевты и психологи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Врачи-психиатры и клинические психологи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Студенты и специалисты в обучении</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Преподаватели психотерапевтических программ</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[#763349]/10 rounded-lg flex items-center justify-center">
                      <Icon name="Star" className="text-[#763349]" size={24} />
                    </div>
                    <CardTitle className="text-xl">Что вы получите</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Знания от ведущих экспертов России</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Сертификат участника конференции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Материалы докладов и презентации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-[#763349] mt-1" size={18} />
                      <span className="text-gray-700">Новые профессиональные контакты</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-[#4e3842] to-[#763349] text-white text-sm px-4 py-1">
                Программа
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Программа конференции
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">09:15 – 09:45</Badge>
                    <CardTitle className="text-xl">Регистрация участников</CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[#763349]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-[#763349]">09:40 – 10:15</Badge>
                    <CardTitle className="text-xl">Открытие конференции</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    <div className="space-y-3 mt-4">
                      <p><strong>Приветственное слово</strong> - Бабин Сергей Михайлович, Президент Российской Психотерапевтической Ассоциации (РПА), врач-психотерапевт высшей категории, профессор, д.м.н</p>
                      <p className="mt-3"><strong>Приветственное слово</strong> - Холмогорова Алла Борисовна, Вице-президент Российской Психотерапевтической Ассоциации (РПА), профессор, д.п.н.</p>
                      <p className="mt-3"><strong>Приветственное слово</strong> - Хетрик Светлана Владимировна, Клинический психолог, исполнительный директор Российской Психотерапевтической Ассоциации (РПА)</p>
                      <p className="mt-3"><strong>Видеообращения представителей психотерапевтических сообществ дружественных стран</strong></p>
                      <p className="mt-3"><strong>Отчет по 2025 году</strong> – Мальцева Екатерина Витальевна, клинический психолог, заместитель председателя МО РПА, директор Союза охраны психического здоровья</p>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[#763349] bg-[#763349]/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-[#763349]">10:15 – 11:50</Badge>
                    <CardTitle className="text-2xl">Пленарное заседание</CardTitle>
                  </div>
                  <CardDescription className="text-lg font-semibold text-gray-900 mb-4">
                    «Векторы психотерапии: изменения и постоянство»
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1 border-[#4e3842] text-[#4e3842]">10:15 – 10:30</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Костюк Георгий Петрович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Профессор, д.м.н., главный врач ПКБ №1 им. Н.А. Алексеева, главный психиатр Москвы
                        </p>
                        <p className="text-[#763349] font-medium">«Психиатрия и психотерапия: опыт интеграции»</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">10:30 – 10:50</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Шумский Владимир Борисович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          К.п.н., Высшая школа экзистенциального анализа
                        </p>
                        <p className="text-[#4e3842] font-medium">
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
                        <p className="text-[#4e3842] font-medium">
                          «Концепция потребностей в когнитивно-поведенческой психотерапии»
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">11:10 – 11:30</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Команда ИСТ</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Ялтонская А., Гегель Н., Марьясова Д. — представители Московского института Схема-терапии
                        </p>
                        <p className="text-[#4e3842] font-medium">Прошлое, настоящее и будущее в схема-терапии</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="mt-1">11:30 – 11:50</Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Хломов Даниил Нестерович</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          К.п.н., директор Московского гештальт института, президент АПП
                        </p>
                        <p className="text-[#4e3842] font-medium">
                          «Развитие и становление психотерапии в России. Путь длиной в 30 лет»
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-400">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">11:50 – 12:00</Badge>
                    <CardTitle className="text-xl">Перерыв</CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[#763349] bg-[#763349]/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-[#763349]">12:00 – 13:00</Badge>
                    <CardTitle className="text-xl">Дискуссия</CardTitle>
                  </div>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    ИИ в психотерапии. Новая реальность. Угроза или инструмент?
                  </CardDescription>
                  <CardDescription className="text-base mt-2">
                    Самохин Д.В. (к.м.н., психотерапевт) vs Корнешов А.А. (д.эк.н., к.психол.н.)
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

              <Card className="border-l-4 border-l-[#763349] bg-[#763349]/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-[#763349]">14:00 – 15:50</Badge>
                    <CardTitle className="text-xl">Параллельные секции</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border-2 border-[#763349]/20">
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

                    <div className="bg-white p-6 rounded-lg border-2 border-[#763349]/20">
                      <h3 className="text-lg font-bold mb-3 text-gray-900">Секция 2: Мастерская терапевтических подходов</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Интерактивный разбор клинического случая в рамках различных терапевтических школ
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Эксперты:</strong> Бегиджанова Ю. (системная семейная психотерапия), Степанова Е. (психоаналитический подход), Шевченко Д. (КПТ, схема-терапия)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-400">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">15:50 – 16:00</Badge>
                    <CardTitle className="text-xl">Перерыв</CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[#5f3846] bg-[#763349]/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-[#5f3846]">16:00 – 17:00</Badge>
                    <CardTitle className="text-xl">PSY-TALKS: Личная профессиональная история</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Москвин Вячеслав Вячеславович</h4>
                    <p className="text-sm text-gray-600 mb-1">Клинический психолог, КПТ терапевт</p>
                    <p className="text-[#4e3842] font-medium">«Роль экспозиции в когнитивно-поведенческой психотерапии»</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Хвощевская Софья Игоревна</h4>
                    <p className="text-sm text-gray-600 mb-1">Магистр психологии ВШЭ, психоаналитически ориентированный психолог</p>
                    <p className="text-[#4e3842] font-medium">«Техника активного слушания в психоаналитической психотерапии»</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Абрамов Сергей Владимирович</h4>
                    <p className="text-sm text-gray-600 mb-1">Врач-психиатр, психотерапевт, преподаватель НМИЦ ПН им. В.П. Сербского</p>
                    <p className="text-[#4e3842] font-medium">«Неблагоприятный детский опыт: от Фрейда до эпигенетики»</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-400">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">17:00 – 17:10</Badge>
                    <CardTitle className="text-xl">Перерыв</CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[#763349] bg-[#763349]/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-[#763349]">17:10 – 17:30</Badge>
                    <CardTitle className="text-xl">Интерактивная дискуссия</CardTitle>
                  </div>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    «Цифра и человек: финал как начало диалога»
                  </CardDescription>
                  <CardDescription className="text-base mt-2">
                    Модератор: Мальцева Екатерина Витальевна – клинический психолог, директор Союза охраны психического здоровья, заместитель председателя Московского отделения РПА
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-[#4e3842]">17:30 – 18:00</Badge>
                    <CardTitle className="text-xl">Закрытие конференции. Нетворкинг</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-[#4e3842] to-[#763349] text-white text-sm px-4 py-1">
                Спикеры
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ведущие эксперты России
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Профессора, доктора наук и ведущие практики в области психотерапии
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4e3842] to-[#763349] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Костюк Георгий Петрович</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Профессор, д.м.н., главный врач ПКБ №1 им. Н.А. Алексеева
                      </p>
                      <Badge variant="outline" className="text-xs">Психиатрия и психотерапия</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#5f3846] to-[#763349] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Шумский Владимир Борисович</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        к.п.н., Высшая школа экзистенциального анализа
                      </p>
                      <Badge variant="outline" className="text-xs">Экзистенциальный анализ</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4e3842] to-[#5f3846] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Зрютин Максим Александрович</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Вице-президент АКПП, клиницист института Бека
                      </p>
                      <Badge variant="outline" className="text-xs">КПТ</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#5f3846] to-[#763349] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Хломов Даниил Нестерович</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        к.п.н., директор Московского гештальт института
                      </p>
                      <Badge variant="outline" className="text-xs">Гештальт-терапия</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#5f3846] to-[#763349] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Представители Московского института Схема-терапии</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Ялтонская А., Гегель Н., Марьясова Д.
                      </p>
                      <Badge variant="outline" className="text-xs">Схема-терапия</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4e3842] to-[#763349] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Мальцева Екатерина Витальевна</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Директор Союза охраны психического здоровья
                      </p>
                      <Badge variant="outline" className="text-xs">Модератор</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                И другие ведущие специалисты в области психотерапии
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#4e3842] to-[#763349] hover:from-[#5f3846] hover:to-[#874357]"
                onClick={() => window.open('https://finance.ozon.ru/apps/sbp/ozonbankpay/019a72f4-edc6-7423-abbf-5a3a4a72efcf', '_blank')}
              >
                <Icon name="Heart" className="mr-2" size={20} />
                Поддержать нас
              </Button>
              <p className="text-gray-600 text-sm mt-4 max-w-md mx-auto">
                Вы можете поддержать нас, чтобы мы продолжали организовывать такие конференции
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-[#4e3842] to-[#763349] text-white text-lg px-8 py-3">
                Регистрация
              </Badge>
              <Badge className="mb-6 bg-green-500 text-white text-xl px-8 py-3">
                Участие бесплатно
              </Badge>
              <p className="text-gray-600 text-lg">
                Заполните форму, чтобы принять участие в конференции
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <iframe 
                  src="https://forms.yandex.ru/u/692d3eec068ff05c85b7e074/?iframe=1" 
                  frameBorder="0" 
                  name="ya-form-692d3eec068ff05c85b7e074" 
                  width="100%" 
                  style={{ height: '800px' }}
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="info" className="py-12 md:py-16 bg-gradient-to-br from-[#763349]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-[#4e3842] to-[#763349] text-white text-sm px-4 py-1">
                Важная информация
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Важно знать
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-[#763349]/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#763349]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-[#763349]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Только очный формат</h3>
                      <p className="text-gray-600">Конференция проводится исключительно в очном формате. Онлайн-трансляции не будет.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#763349]/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#763349]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Video" className="text-[#763349]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Записи не будет</h3>
                      <p className="text-gray-600">Мероприятие не записывается. Все материалы доступны только для очных участников.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#763349]/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#763349]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ClipboardCheck" className="text-[#763349]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Регистрация обязательна</h3>
                      <p className="text-gray-600">Для участия в конференции необходима предварительная регистрация через форму на сайте.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#763349]/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Места ограничены</h3>
                      <p className="text-gray-600">Количество мест ограничено. Регистрируйтесь заранее, чтобы гарантировать своё участие.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>rpa.moscow@yandex.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (926) 635-20-69</span>
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

          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="font-bold text-lg mb-6 text-center">Соорганизаторы</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="https://mental-health-russia.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-center"
              >
                <p className="font-semibold">Союз охраны</p>
                <p className="font-semibold">психического здоровья</p>
              </a>
              <a 
                href="https://gorodets.ru/page/s-sopz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-center"
              >
                <p className="font-semibold">Издательство</p>
                <p className="font-semibold">Городец</p>
              </a>
              <a 
                href="https://rosmededucation.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-center"
              >
                <p className="font-semibold">НОЦ СМТ</p>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            © 2025 Конференция РПА. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;