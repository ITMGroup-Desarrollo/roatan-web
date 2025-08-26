import os

# Obtener todos los archivos .webp en la carpeta actual
imagenes = [f for f in os.listdir() if f.lower().endswith('.webp')]

# Ordenar alfabéticamente (opcional)
imagenes.sort()

# Renombrar
for i, nombre_original in enumerate(imagenes, start=1):
    nuevo_nombre = f"{i}.webp"
    os.rename(nombre_original, nuevo_nombre)
    print(f"Renombrado: {nombre_original} -> {nuevo_nombre}")
