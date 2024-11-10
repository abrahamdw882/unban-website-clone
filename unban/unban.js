document.addEventListener('DOMContentLoaded', function() {
    const phoneInputField = document.getElementById('phone');
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch('https://ipinfo.io/json')
                .then(response => response.json())
                .then(data => callback(data.country))
                .catch(() => callback('us'));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    document.getElementById('unbanForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = phoneInput.getNumber();

        const permanentBan = document.getElementById('permanentBan').checked;
        const temporaryBan = document.getElementById('temporaryBan').checked;

        if (phoneNumber && (permanentBan || temporaryBan)) {
            const email = 'support@support.whatsapp.com';
            const subject = 'Debo comprar un nuevo número de teléfono? Si esto es lo que se quiere decir, entonces por favor no me ayuden y eliminaré la aplicación WhatsApp.';
            
            let body = '';
            if (temporaryBan) {
                body = 'Государственный управляющий и управляющий системой WhatsApp. Дейше, ты мне представился впервые. Вы являетесь владельцем компании ExxonMobil (производство нефти, газа и химических продуктов). Что может привести к постоянной блокировке моего сообщения в WhatsApp, потому что это не политика конфиденциальности в WhatsApp. Мой контакт с WhatsApp очень важен для моего предприятия, потому что ваша система должна немедленно заблокировать мой контакт с WhatsApp!!, потому что компания ExxonMobil является собственностью ExxonMobil и действительно может вам помочь со мной в WhatsApp, и это будет лучшим способом. мета-система для мгновенного восстановления данных в WhatsApp. Обригадо';  // Body for temporary ban
            } else if (permanentBan) {
                body = 'Hola equipo de soporte de WhatsApp. Por favor ayúdenme y respóndanme lo antes posible. Recibí el código de verificación sin pedirlo. Me robaron la cuenta. Cuando intenté recuperar mi cuenta, quise registrarme a través de WhatsApp Business. Un mensaje apareció. Su cuenta ha sido bloqueada para usar WhatsApp. Por favor, ayúdenme porque uso WhatsApp como un medio para promocionar mi negocio. Mi culpa porque compartí mi código de verificación con otra persona que se hizo pasar por el equipo de soporte de WhatsApp y me envió alguna prueba de que trabaja en el equipo de soporte de WhatsApp y cuando confié en él me robó la cuenta. Creo que mi cuenta fue restringida porque el sistema de seguridad de WhatsApp sospechaba esta actividad sospechosa. Les estoy agradecido. Agradezco al equipo de soporte de WhatsApp por sus esfuerzos para apoyar y proteger a los usuarios de WhatsApp. Prometo que mantendré mi seguridad y no confiaré en nadie ni compartiré mi código de verificación con nadie que diga ser el equipo de soporte de WhatsApp.';  // Body for permanent ban
            }
            
            // Open the default email client with the prepared message
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else {
            alert('Please fill out all fields.');
        }
    });

    document.getElementById('permanentBan').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('temporaryBan').checked = false; // Uncheck temporary ban if permanent is checked
        }
    });

    document.getElementById('temporaryBan').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('permanentBan').checked = false; // Uncheck permanent ban if temporary is checked
        }
    });
});
