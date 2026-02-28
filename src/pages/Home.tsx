import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Star, 
  MoonStar, 
  Layers, 
  Spade, 
  Compass, 
  Eye, 
  User, 
  Type 
} from 'lucide-react';

const categories = [
  { id: 'numerology', name: 'Thần Số Học', icon: Calculator, desc: 'Khám phá ý nghĩa các con số trong cuộc đời bạn.', path: '/read/numerology' },
  { id: 'tuvi', name: 'Tử Vi', icon: Star, desc: 'Luận giải lá số tử vi phương Đông.', path: '/read/tuvi' },
  { id: 'astrology', name: 'Bản Đồ Sao', icon: MoonStar, desc: 'Chiêm tinh học phương Tây và vị trí các vì sao.', path: '/read/astrology' },
  { id: 'tarot', name: 'Tarot', icon: Layers, desc: 'Rút bài Tarot để nhận thông điệp vũ trụ.', path: '/read/tarot' },
  { id: 'playing-cards', name: 'Bói Bài Tây', icon: Spade, desc: 'Dự đoán tương lai qua bộ bài 52 lá.', path: '/read/playing-cards' },
  { id: 'bazi', name: 'Bát Tự', icon: Compass, desc: 'Tứ trụ tử bình, phân tích ngũ hành.', path: '/read/bazi' },
  { id: 'oracle', name: 'Oracle', icon: Eye, desc: 'Nhận lời khuyên từ các bộ bài Oracle.', path: '/read/oracle' },
  { id: 'human-design', name: 'Human Design', icon: User, desc: 'Bản đồ thiết kế con người của bạn.', path: '/read/human-design' },
  { id: 'runes', name: 'Cổ Ngữ Runes', icon: Type, desc: 'Gieo quẻ bằng bảng chữ cái cổ Bắc Âu.', path: '/read/runes' },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-light tracking-tight gold-text"
        >
          Khám Phá Vận Mệnh
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-300 font-light leading-relaxed"
        >
          Năm 2026 mang đến những năng lượng mới. Hãy chọn một phương pháp huyền học để lắng nghe thông điệp dành riêng cho bạn.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 + 0.2 }}
            >
              <Link 
                to={cat.path}
                className="block h-full glass-panel p-8 group hover:bg-white/5 transition-all duration-300 hover:gold-glow"
              >
                <div className="w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-mystic-800/50">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-3 text-white group-hover:text-gold-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
