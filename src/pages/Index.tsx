import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Скоро свяжусь с тобой для обсуждения деталей",
    });
    setFormData({ name: '', email: '', contact: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="text-primary text-lg font-semibold tracking-wider uppercase">DJ Bazz</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            Создам<br />
            <span className="text-gradient">оригинальную песню</span><br />
            под тебя
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Музыка, которая цепляет и запоминается
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-12 py-7 rounded-full glow-effect hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection('pricing')}
            >
              <Icon name="Music" className="mr-2" size={24} />
              Заказать создание песни
            </Button>
          </div>
          
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span>Авторская музыка</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span>Видеоклипы</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span>Гарантия качества</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <Card className="gradient-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="User" size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient">DJ Bazz</h3>
                  <p className="text-xl text-foreground/90 font-semibold mb-4">Музыкальный продюсер</p>
                </div>
              </div>

              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p className="flex items-start gap-3">
                  <Icon name="Disc3" size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <span>Создаю песни и клипы по брифу, под настроение, эмоции, событие или задачу</span>
                </p>
                
                <p className="flex items-start gap-3">
                  <Icon name="Users" size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <span>Работаю с артистами, блогерами, бизнесами и частными заказчиками</span>
                </p>
                
                <p className="flex items-start gap-3">
                  <Icon name="Sparkles" size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <span className="font-semibold text-foreground">Уникальный подход — каждая песня создается как отдельная маленькая история</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Тарифы
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl font-black">Живая очередь</CardTitle>
                <CardDescription className="text-4xl font-black text-foreground mt-2">
                  Бесплатно
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Клиент заполняет онлайн-бриф</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Я делаю песню бесплатно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Clock" size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span>Только когда есть свободное время</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertCircle" size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span>Сроки не гарантирую</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full py-6 text-lg font-semibold"
                  onClick={() => scrollToSection('contact')}
                >
                  Встать в очередь
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center glow-effect">
                  <Icon name="Music" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-black">Песня</CardTitle>
                <CardDescription className="text-4xl font-black text-gradient mt-2">
                  2000 ₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Авторская песня по брифу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>В понятный срок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>С возможностью корректировок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Профессиональное качество</span>
                  </li>
                </ul>
                <Button 
                  className="w-full py-6 text-lg font-semibold glow-effect"
                  onClick={() => scrollToSection('contact')}
                >
                  Заказать песню
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 border-secondary/50">
              <CardHeader className="text-center pb-4">
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    ТОП
                  </span>
                </div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center glow-effect">
                  <Icon name="Video" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl font-black">Песня + клип</CardTitle>
                <CardDescription className="text-4xl font-black text-gradient mt-2">
                  3000 ₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Полный проект под ключ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Песня по брифу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Видеоклип или визуальный ролик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Готово для соцсетей и публикации</span>
                  </li>
                </ul>
                <Button 
                  className="w-full py-6 text-lg font-semibold bg-secondary hover:bg-secondary/90 glow-effect"
                  onClick={() => scrollToSection('contact')}
                >
                  Заказать песню и клип
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Как всё происходит
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: 'ListChecks', title: '1. Выбираешь тариф', desc: 'Определяешься с форматом: песня или песня + клип' },
              { icon: 'FileText', title: '2. Заполняешь бриф', desc: 'Рассказываешь о настроении, теме, идее, стиле' },
              { icon: 'Wand2', title: '3. Я создаю', desc: 'Работаю над песней (и клипом), учитывая все пожелания' },
              { icon: 'PartyPopper', title: '4. Получаешь результат', desc: 'Готовая песня, которая цепляет и запоминается' },
            ].map((step, index) => (
              <Card key={index} className="gradient-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Оставь заявку
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжусь с тобой в течение 24 часов
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
          </div>

          <Card className="gradient-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Как тебя зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-lg">Telegram / WhatsApp</Label>
                  <Input
                    id="contact"
                    placeholder="@username или +7..."
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg">Расскажи о проекте (необязательно)</Label>
                  <Textarea
                    id="message"
                    placeholder="Какую песню или клип хочешь создать?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="text-lg"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full py-6 text-lg font-semibold glow-effect">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-gradient mb-2">DJ Bazz</h3>
              <p className="text-muted-foreground">Музыкальный продюсер</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground mb-2">Связаться со мной:</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Mail" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Phone" size={20} />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 DJ Bazz. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
