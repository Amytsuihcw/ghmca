import { Music, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Intro */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif font-bold text-xl">全球健康音樂慈善總會</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              以音樂為引，服務社會為本。<br />
              非牟利慈善音樂團體，成立於2024年。
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">聯絡我們</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@ghmc.org</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+852 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>香港</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">快速連結</h4>
            <ul className="space-y-2">
              {["關於我們", "服務範疇", "活動消息", "加入我們"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © 2024 全球健康音樂慈善總會 Global Health Music Charity Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
