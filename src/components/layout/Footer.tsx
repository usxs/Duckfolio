import { motion } from 'framer-motion';

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative z-10 py-6 mt-auto text-center text-[#121212]/60 dark:text-white/60 text-sm"
    >
      {/* 1. 备案信息栏（已移动至最上方） */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-4 gap-y-1 mb-3 opacity-80">
        <a 
          href="https://beian.miit.gov.cn/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[var(--theme-primary)] transition-colors"
        >
          冀ICP备2024060177号-1
        </a>
        <a 
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13010202004068" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center hover:text-[var(--theme-primary)] transition-colors"
        >
          <img 
            src="/gongan.png" 
            alt="公安备案图标" 
            className="w-4 h-4 mr-1 inline-block"
          />
          冀公网安备 13010202004068 号
        </a>
      </div>

      {/* 2. 版权信息 */}
      <p className="mb-2">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>

      {/* 3. 底部链接 */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/usxs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--theme-primary)]  dark:hover:text-[var(--theme-secondary)] transition-colors"
        >
          ZhangXingYu
        </a>
        <span>•</span>
        <a
          href="https://github.com/usxs/Duckfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--theme-primary)]  dark:hover:text-[var(--theme-secondary)] transition-colors"
        >
          Duckfolio
        </a>
      </div>
    </motion.footer>
  );
}