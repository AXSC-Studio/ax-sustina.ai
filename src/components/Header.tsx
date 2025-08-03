import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary-800 rounded-lg mr-3 flex items-center justify-center text-white font-semibold text-sm">
          AX
        </div>
        <div className="text-xl font-semibold text-gray-900">
          Sustina.ai
        </div>
      </div>
      
      <nav className="flex items-center gap-6">
        <a href="#" className="text-gray-600 hover:text-primary-800 hover:bg-primary-50 px-4 py-2 rounded-md transition-all text-lg font-medium">
          ダッシュボード
        </a>
        <a href="#" className="text-primary-800 bg-primary-50 px-4 py-2 rounded-md text-lg font-medium">
          分析
        </a>
        <a href="#" className="text-gray-600 hover:text-primary-800 hover:bg-primary-50 px-4 py-2 rounded-md transition-all text-lg font-medium">
          レポート
        </a>
        <div className="w-8 h-8 rounded-full bg-cover bg-center cursor-pointer border-2 border-transparent hover:border-primary-800 transition-all">
          <img 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1+iiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q=="
            alt="User Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
