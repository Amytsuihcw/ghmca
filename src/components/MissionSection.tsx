import { motion } from "framer-motion";
import { Heart, Target, Sparkles } from "lucide-react";

const MissionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* 使命 */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            使命
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            透過音樂的療癒力量，促進全球社區的身心健康與福祉。我們致力於將音樂帶入醫療機構、
            安老院舍及弱勢社群，以專業的音樂治療服務，為有需要的人士帶來希望與慰藉，
            讓音樂成為連結人心、療癒心靈的橋樑。
          </p>
        </motion.div>

        {/* 願景與核心價值 */}
        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/50 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            願景與核心價值
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            成為全球領先的音樂慈善組織，讓每一個生命都能感受到音樂帶來的溫暖與力量。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "仁愛", desc: "以愛心關懷每一位服務對象" },
              { title: "專業", desc: "堅持專業音樂治療標準" },
              { title: "共融", desc: "促進社會各階層的和諧共處" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-shadow duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 成立宗旨 */}
        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            成立宗旨
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              全球健康音樂慈善總會於2024年由黃騫緯博士及鍾麗裳博士共同創立，
              秉承「以音樂為引，服務社會為本」的崇高理念，致力於：
            </p>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              {[
                "推廣音樂治療，提升公眾對音樂療癒力量的認識",
                "為長者、病患及弱勢社群提供免費音樂服務",
                "培育音樂治療專業人才，推動行業發展",
                "聯繫全球音樂慈善力量，共建關愛社區"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
