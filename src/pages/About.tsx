import { motion } from 'motion/react';
import { Sparkles, Star, Moon } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif font-medium gold-text">
          Về Aura Mystic
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Nơi giao thoa của trí tuệ cổ xưa và công nghệ hiện đại, mang đến cho bạn những thông điệp sâu sắc từ vũ trụ.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-mystic-800 rounded-full flex items-center justify-center border border-gold-500/30">
            <Star className="w-6 h-6 text-gold-400" />
          </div>
          <h3 className="text-xl font-serif font-medium text-white">Trí Tuệ Cổ Xưa</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Hội tụ tinh hoa từ Thần số học Pythagoras, Tử vi phương Đông, đến Chiêm tinh học phương Tây và Cổ ngữ Bắc Âu.
          </p>
        </div>

        <div className="glass-panel p-8 text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-mystic-800 rounded-full flex items-center justify-center border border-gold-500/30">
            <Sparkles className="w-6 h-6 text-gold-400" />
          </div>
          <h3 className="text-xl font-serif font-medium text-white">Công Nghệ AI</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Sử dụng mô hình ngôn ngữ lớn tiên tiến nhất để phân tích, tổng hợp và đưa ra những luận giải chính xác, cá nhân hóa.
          </p>
        </div>

        <div className="glass-panel p-8 text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-mystic-800 rounded-full flex items-center justify-center border border-gold-500/30">
            <Moon className="w-6 h-6 text-gold-400" />
          </div>
          <h3 className="text-xl font-serif font-medium text-white">Chữa Lành</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Không chỉ là dự đoán tương lai, Aura Mystic hướng tới việc thấu hiểu bản thân, chữa lành tâm hồn và định hướng cuộc sống.
          </p>
        </div>
      </div>

      <div className="glass-panel p-8 md:p-12 text-center space-y-6">
        <h3 className="text-2xl font-serif font-medium gold-text">Tầm Nhìn 2026</h3>
        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Năm 2026 đánh dấu một chu kỳ năng lượng mới. Aura Mystic được tạo ra với sứ mệnh trở thành người bạn đồng hành tâm linh đáng tin cậy, giúp bạn vững bước trên hành trình khám phá vận mệnh và làm chủ cuộc đời mình.
        </p>
      </div>
    </motion.div>
  );
}
