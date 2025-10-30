import { useState } from 'react';

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Labial Mate Rouge",
      categoria: "Maquillaje",
      precio: 45000,
      stock: 12
    },
    {
      id: 2,
      nombre: "Collar de Plata",
      categoria: "Joyería",
      precio: 120000,
      stock: 5
    }
  ]);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    categoria: "Maquillaje",
    precio: "",
    stock: ""
  });

  const manejarCambio = (evento) => {
    const campo = evento.target.name;
    const valor = evento.target.value;
    
    setNuevoProducto({
      ...nuevoProducto,
      [campo]: valor
    });
  };

  const agregarProducto = () => {
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.stock) {
      alert("Por favor completa todos los campos");
      return;
    }

    const productoParaAgregar = {
      id: Date.now(),
      nombre: nuevoProducto.nombre,
      categoria: nuevoProducto.categoria,
      precio: Number(nuevoProducto.precio),
      stock: Number(nuevoProducto.stock)
    };

    setProductos([...productos, productoParaAgregar]);

    setNuevoProducto({
      nombre: "",
      categoria: "Maquillaje",
      precio: "",
      stock: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">
          Mi Inventario de Productos
        </h1>
        <p className="text-gray-600 mb-8">
          Total de productos: {productos.length}
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Agregar Nuevo Producto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Producto
              </label>
              <input
                type="text"
                name="nombre"
                value={nuevoProducto.nombre}
                onChange={manejarCambio}
                placeholder="Ej: Labial Rojo Mate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                name="categoria"
                value={nuevoProducto.categoria}
                onChange={manejarCambio}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="Maquillaje">Maquillaje</option>
                <option value="Joyería">Joyería</option>
                <option value="Cuidado">Cuidado</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Precio
              </label>
              <input
                type="number"
                name="precio"
                value={nuevoProducto.precio}
                onChange={manejarCambio}
                placeholder="45000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={nuevoProducto.stock}
                onChange={manejarCambio}
                placeholder="10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            onClick={agregarProducto}
            className="mt-4 w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            ✓ Agregar Producto
          </button>
        </div>

        <div className="grid gap-4">
          {productos.map((producto) => (
            <div 
              key={producto.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {producto.nombre}
                  </h2>
                  <p className="text-purple-600 font-medium mt-1">
                    {producto.categoria}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">
                    ${producto.precio.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Stock: {producto.stock} unidades
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;