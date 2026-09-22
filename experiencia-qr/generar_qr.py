import qrcode
from PIL import Image

def generate_qr(url, output_filename="codigo_amor.png"):
    # Configuración del código QR
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # Crear imagen del QR con colores románticos (Azul noche y blanco o dorado)
    # Relleno oscuro (Azul noche), fondo blanco
    img_qr = qr.make_image(fill_color="#0F172A", back_color="#FFFFFF").convert('RGB')
    
    # Opcional: Podrías añadir un pequeño ícono de corazón o flor en el centro aquí
    # si tuvieras una imagen de ícono, pero por ahora un QR elegante es suficiente.

    img_qr.save(output_filename)
    print(f"Código QR generado y guardado como {output_filename} apuntando a: {url}")

if __name__ == "__main__":
    # Cambia esta URL por la URL donde esté alojada la página, o tu IP local para probar
    url_destino = "https://mi-carta-i0kk.onrender.com" 
    generate_qr(url_destino)
