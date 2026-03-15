/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Clock, 
  PawPrint, 
  Trees, 
  Scissors, 
  Trophy, 
  Flag, 
  Phone, 
  MapPin, 
  User,
  CheckCircle2
} from "lucide-react";

const COLORS = {
  blue: "text-pony-blue",
  pink: "text-pony-pink",
  orange: "text-pony-orange",
  green: "text-pony-green",
};

const ActivityCard = ({ 
  icon: Icon, 
  time, 
  title, 
  desc, 
  themeColor 
}: { 
  icon: any; 
  time: string; 
  title: string; 
  desc: string; 
  themeColor: 'green' | 'pink' | 'orange' | 'blue' 
}) => {
  const themes = {
    green: "bg-[#f1f8e9] text-[#558b2f]",
    pink: "bg-[#fce4ec] text-[#ad1457]",
    orange: "bg-[#fff3e0] text-[#e65100]",
    blue: "bg-[#e3f2fd] text-[#1565c0]",
  };

  const iconColors = {
    green: "text-pony-green",
    pink: "text-pony-pink",
    orange: "text-pony-orange",
    blue: "text-pony-blue",
  };

  return (
    <div className={`relative flex-1 min-w-[110px] rounded-2xl p-6 pt-8 text-center shadow-sm transition-transform hover:scale-105 flex flex-col items-center gap-2 ${themes[themeColor].split(' ')[0]}`}>
      <div className="absolute -top-3 -right-2 bg-white px-3 py-1 rounded-full shadow-md text-xs flex flex-col items-center leading-tight border-none">
        <Clock className={`w-4 h-4 mb-0.5 ${iconColors[themeColor]}`} />
        <span className={themes[themeColor].split(' ')[1]}>{time}</span>
      </div>
      <Icon className={`w-10 h-10 mb-1 ${iconColors[themeColor]}`} />
      <div className="flex flex-col items-center">
        <h4 className={`font-display text-xl uppercase leading-tight ${themes[themeColor].split(' ')[1]}`}>{title}</h4>
        <p className="text-sm text-gray-600 leading-tight">{desc}</p>
      </div>
    </div>
  );
};

export default function App() {
  const title = "KINDERGEBURTSTAG";
  const titleColors = [COLORS.blue, COLORS.pink, COLORS.orange, COLORS.green];

  return (
    <div className="min-h-screen bg-white selection:bg-pony-pink/20">
      {/* Header */}
      <header className="text-center py-12 px-4 relative z-30">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          src="https://static1.squarespace.com/static/67a9be76c0c9e05c986c398f/t/699b1393619e2d73d35b97aa/1771770771690/Logotransp.png" 
          alt="Logo Demmerhof Ponys" 
          className="max-w-[480px] w-full mx-auto mb-8"
          referrerPolicy="no-referrer"
        />
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display text-5xl md:text-8xl leading-none mb-6 tracking-wider"
        >
          {title.split("").map((char, i) => (
            <span key={i} className={titleColors[i % titleColors.length]}>{char}</span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-pony-dark max-w-3xl mx-auto leading-tight px-4 mb-4"
        >
          Bist du bereit für Spiel, Spaß und Hufeisen-Glück?
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 text-gray-700"
        >
          Putzen, Kuscheln, Reiten und Toben – auf unserem Hof wird dein Geburtstag zu einem echten Erlebnis. Gemeinsam mit unseren Ponys und deinen besten Freunden erlebst du Abenteuer im Grünen, die du so schnell nicht vergisst.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a 
            href="https://forms.gle/kcj1GoAHHmDDEjqDA" 
            className="bg-pony-pink text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-pony-pink/30 hover:bg-[#c2006a] transition-colors inline-block"
          >
            Jetzt Termin anfragen
          </a>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8 relative z-20">
        
        {/* About Section */}
        <section className="my-16">
          <h2 className="font-display text-4xl md:text-5xl text-pony-blue text-center mb-10">
            Lerne unsere vierbeinigen Freunde kennen!
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-[30px] shadow-sm">
            <div className="w-full md:w-[380px] shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/d/1HC9Y0zgvSc7VwaJ_55qf-Ou0s8KjkD9E" 
                alt="Alle im Hof" 
                className="w-full rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                Auf dem Demmerhof sind die Ponys nicht nur unsere Partner, sondern der Mittelpunkt jeder Party. In familiärer Atmosphäre bieten wir Kindern zwischen 4 und ca. 10 Jahren einen Ort, an dem sie die Natur entdecken und echte Freundschaften mit unseren Ponys schließen können.
              </p>
              <p>
                <strong>Unsere Stars:</strong> Aktuell begleiten euch zwei liebe Shetlandponys und ein großes Reitpony durch den Tag. Und pssst: Ab Sommer 2026 erwartet euch ein ganz besonderer Neuzugang – unser neues Welsh Pony!
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <img 
            src="https://lh3.googleusercontent.com/d/13S1dEElAdy91ikpTqUMlgkdK815T2X7t" 
            alt="Betty im Garten" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipM85LKa2K1W0-2L4KyI8dV3_rvEldkuRAHzyvlu=s680-w680-h510-rw" 
            alt="Spaß auf dem Hof" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Packages Section */}
        <section className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl text-pony-blue text-center mb-4">
            Unsere Geburtstagspakete
          </h2>
          <p className="text-center italic text-gray-600 mb-12">
            Hinweis: In der kalten Jahreszeit (Nov-Feb) feiern wir im Partyraum und bieten nur Paket 1 und 2 an (max. 10 Kinder).
          </p>

          {/* Package 1 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col md:flex-row bg-white rounded-[25px] overflow-hidden shadow-lg mb-14 group"
          >
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMGY9kqJcPGdoO-hPWB_iEE3kuWK7wfUD8w7qwt=s680-w680-h510-rw" 
              alt="Paket 1" 
              className="w-full md:w-80 h-64 md:h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-8 md:p-10 flex-1">
              <div className="mb-6">
                <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Paket 1</span>
                <h3 className="font-display text-3xl md:text-4xl text-pony-green uppercase leading-none">Minigeburtstag</h3>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <ActivityCard 
                  themeColor="green"
                  icon={PawPrint}
                  time="1 Std."
                  title="Ponyzeit"
                  desc="Putzen, Knuddeln & Reiten"
                />
                <ActivityCard 
                  themeColor="green"
                  icon={Trees}
                  time="1-1.5 Std."
                  title="Garten"
                  desc="Freies Toben (Elternaufsicht)"
                />
              </div>

              <div className="bg-gray-100 px-5 py-3 rounded-xl inline-block text-gray-700">
                <strong>KOSTEN:</strong> 80,00 € (2 Std.) oder 100,00 € (2,5 Std.)
              </div>
            </div>
          </motion.div>

          {/* Package 2 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col md:flex-row bg-white rounded-[25px] overflow-hidden shadow-lg mb-14 group"
          >
            <img 
              src="https://static1.squarespace.com/static/67a9be76c0c9e05c986c398f/t/699b13147400373e8b6f44e2/1771770644983/80670006_164076948310708_5841460542547427328_n.jpg" 
              alt="Paket 2" 
              className="w-full md:w-80 h-64 md:h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-8 md:p-10 flex-1">
              <div className="mb-6">
                <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Paket 2</span>
                <h3 className="font-display text-3xl md:text-4xl text-pony-pink uppercase leading-none">Bastelgeburtstag</h3>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <ActivityCard 
                  themeColor="pink"
                  icon={Trees}
                  time="~1 Std."
                  title="Garten"
                  desc="Freies Spiel & Toben"
                />
                <ActivityCard 
                  themeColor="pink"
                  icon={PawPrint}
                  time="~1 Std."
                  title="Ponyzeit"
                  desc="Reiten & Kuscheln"
                />
                <ActivityCard 
                  themeColor="pink"
                  icon={Scissors}
                  time="~1 Std."
                  title="Basteln"
                  desc="Steckenpferd o. Zauberstab"
                />
              </div>

              <div className="bg-gray-100 px-5 py-3 rounded-xl inline-block text-gray-700">
                <strong>KOSTEN:</strong> 150,00 €
              </div>
            </div>
          </motion.div>

          {/* Package 3 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col md:flex-row bg-white rounded-[25px] overflow-hidden shadow-lg mb-14 group"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1ojTaCcSKEgWI2GX9_Aw1puWLrd-v0fnf" 
              alt="Paket 3" 
              className="w-full md:w-80 h-64 md:h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-8 md:p-10 flex-1">
              <div className="mb-6">
                <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Paket 3</span>
                <h3 className="font-display text-3xl md:text-4xl text-pony-orange uppercase leading-none">Bauernhof – Olympiade</h3>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <ActivityCard 
                  themeColor="orange"
                  icon={Trees}
                  time="~1 Std."
                  title="Garten"
                  desc="Spielen & Picknick"
                />
                <ActivityCard 
                  themeColor="orange"
                  icon={PawPrint}
                  time="~1 Std."
                  title="Ponyzeit"
                  desc="Reiten & Kuscheln"
                />
                <ActivityCard 
                  themeColor="orange"
                  icon={Trophy}
                  time="~1 Std."
                  title="Olympiade"
                  desc="Sackhüpfen & Dosenwerfen"
                />
              </div>

              <div className="bg-gray-100 px-5 py-3 rounded-xl inline-block text-gray-700">
                <strong>KOSTEN:</strong> 140,00 €
              </div>
            </div>
          </motion.div>

          {/* Package 4 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col md:flex-row bg-white rounded-[25px] overflow-hidden shadow-lg mb-14 group"
          >
            <div className="w-full md:w-80 h-64 md:h-auto bg-pony-blue flex items-center justify-center text-white font-display text-2xl p-8 text-center">
              BIBI UND TINA
            </div>
            <div className="p-8 md:p-10 flex-1">
              <div className="mb-6">
                <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Paket 4</span>
                <h3 className="font-display text-3xl md:text-4xl text-pony-blue uppercase leading-none">Bibi und Tina</h3>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <ActivityCard 
                  themeColor="blue"
                  icon={Trees}
                  time="~1 Std."
                  title="Garten"
                  desc="Toben & Hexen-Spaß"
                />
                <ActivityCard 
                  themeColor="blue"
                  icon={PawPrint}
                  time="~1 Std."
                  title="Ponyzeit"
                  desc="Echte Ponys reiten"
                />
                <ActivityCard 
                  themeColor="blue"
                  icon={Flag}
                  time="~1 Std."
                  title="Parcours"
                  desc="Hindernislauf m. Stoffpferden"
                />
              </div>

              <div className="bg-gray-100 px-5 py-3 rounded-xl inline-block text-gray-700">
                <strong>KOSTEN:</strong> 130,00 €
              </div>
            </div>
          </motion.div>
        </section>

        {/* Important Info */}
        <section className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl text-pony-blue text-center mb-10">
            Wichtige Infos für Eltern
          </h2>
          <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-[30px] shadow-sm">
            <ul className="space-y-6">
              {[
                { label: "Gruppengröße", text: "Max. 8 Kinder. Bis zu 12 Kinder möglich (ab dem 9. Kind +10,00 € pro Kind). Wenn alle Kinder > 1,35m & > 35kg sind, Limit strikt bei 8 Kindern." },
                { label: "Begleitpersonen", text: "Max. 3 Erwachsene. Die Aufsichtspflicht während der Gartenzeit obliegt euch." },
                { label: "Ausrüstung mitbringen", text: "Reitkappe/Fahrradhelm und feste Schuhe (im Sommer gerne Wechselschuhe)." },
                { label: "Verpflegung", text: "Kuchen/Essen kann mitgebracht werden. Der Tisch ist von uns dekoriert (inkl. Geschirr). Getränke können für 1,50 €/Kind dazugebucht werden." },
                { label: "Spiel & Spaß", text: "Unser großer Garten kann voll genutzt werden. Kinderschminken ist gratis möglich." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-pony-green shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-pony-dark">{item.label}:</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Box */}
        <section className="bg-white p-10 md:p-16 rounded-[40px] text-center mb-24 shadow-xl shadow-gray-100 border border-gray-50">
          <h3 className="font-display text-4xl md:text-5xl text-pony-blue mb-6">
            Wir freuen uns auf Euren Besuch!
          </h3>
          <div className="flex flex-col items-center gap-4 text-lg text-gray-700 mb-10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-pony-pink" />
              <strong>Andrea Cramer</strong>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pony-pink" />
              <span>St. Nikolaus Str. 2, 53909 Zülpich – Füssenich</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pony-pink" />
              <span>01590/1756717</span>
            </div>
          </div>
          
          <a 
            href="https://forms.gle/kcj1GoAHHmDDEjqDA" 
            className="bg-pony-pink text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-pony-pink/30 hover:bg-[#c2006a] transition-all hover:scale-105 inline-block"
          >
            Jetzt Wunschtermin anfragen
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Demmerhof Ponys. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
