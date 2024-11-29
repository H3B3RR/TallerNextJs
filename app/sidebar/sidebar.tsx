import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100%;
          position: fixed;
          top: 0;
          left: -250px;
          background-color: #111;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 60px;
        }
        .sidebar.open {
          left: 0;
        }
        .sidebar ul {
          list-style-type: none;
          padding: 0;
        }
        .sidebar ul li {
          padding: 8px 16px;
          text-align: center;
        }
        .sidebar ul li a {
          color: white;
          text-decoration: none;
          display: block;
        }
        .sidebar ul li a:hover {
          background-color: #575757;
        }
        button {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;