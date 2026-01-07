import { motion } from "framer-motion";
import { Award } from "lucide-react";

const FoundersSection = () => {
  const founders = [
    {
      name: "黃騫緯博士",
      nameEn: "Dr. Wong Hin Wai",
      role: "創會會長",
    },
    {
      name: "鍾麗裳博士",
      nameEn: "Dr. Chung Lai Sheung",
      role: "創會副會長",
    }
  ];

  return (
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            創會成員
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 text-center border border-border hover:shadow-elegant transition-all duration-500">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">
                    {founder.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{founder.nameEn}</p>
                <p className="text-primary font-medium">{founder.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          二零二四年，兩位博士懷著對音樂的熱愛與對社會的關懷，
          攜手創立全球健康音樂慈善總會，開啟以音樂服務社會的新篇章。
        </motion.p>
      </div>
    </section>
  );
};

export default FoundersSection;
