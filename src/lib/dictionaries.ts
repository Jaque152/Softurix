export type Language = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nuestra Esencia",
      services: "Catálogo",
      contact: "Escríbenos",
      plan: "Tu ruta ideal",
      announcement: "Formación corporativa digital · Disponibilidad instantánea · Facturas en MXN",
    },
    home: {
      hero: {
        eyebrow: "Formación corporativa digital",
        titleLine1: "Desarrollamos líderes",
        titleLine2: "que ",
        titleHighlight: "evolucionan",
        titleLine3: "empresas",
        desc: "Creamos trayectos de aprendizaje efectivos para profesionales y equipos decididos a expandirse con metas claras. Fusionamos táctica, identidad y dirección corporativa.",
        stats: {
          programs: "Cursos",
          online: "Digital",
          grads: "Graduados",
        },
        collage: {
          box1Title: "Táctica, identidad y dirección",
          box1Desc: "integradas en una sola experiencia.",
          box2Eyebrow: "Logros",
          box2Title: "Perdurables y cuantificables",
        },
      },
      marquee: [
        "Potenciando talentos",
        "Logros tangibles",
        "Liderazgo responsable",
        "Educación completa",
        "Avance significativo",
      ],
      business: {
        eyebrow: "Evolución corporativa",
        title: "Expansión que une el talento humano con las metas corporativas",
        desc1: "Fomentamos la evolución de profesionales y corporativos unificando táctica, identidad y dirección, promoviendo decisiones asertivas y un enfoque comercial centrado en logros perdurables.",
        desc2: "Mezclamos conocimiento especializado con competencias esenciales de gestión y comunicación para renovar la dinámica de trabajo de tu equipo.",
      },
      programs: {
        eyebrow: "Planes ejecutivos",
        title: "Un sistema estructurado para especialistas con agendas exigentes",
        items: [
          { n: "01", title: "Modalidad Online", text: "Aprende desde cualquier ubicación con acceso a plataformas digitales, recursos interactivos y sesiones guiadas." },
          { n: "02", title: "Ritmo Flexible", text: "Formatos que se ajustan a tu agenda profesional, con módulos diseñados para responder a tus necesidades reales." },
          { n: "03", title: "Aplicación Real", text: "Trabaja con desafíos reales, ejercicios guiados y herramientas listas para usar en tu día a día laboral." },
          { n: "04", title: "Materiales Útiles", text: "Obtén guías, formatos y recursos prácticos para apoyar tus actividades y decisiones cotidianas." },
          { n: "05", title: "Enfoque Humano", text: "Fortalecemos liderazgo, comunicación y gestión consciente para impulsar la colaboración y el bienestar del equipo." },
          { n: "06", title: "Cultura y Sentido", text: "Integramos valores y prácticas que fortalecen identidad, colaboración y un liderazgo con sentido claro." },
        ],
      },
      integral: {
        eyebrow: "Preparación holística",
        title: "Cursos estructurados para afrontar desafíos auténticos",
        desc: "Elaboramos rutas de crecimiento que resuelven los retos actuales de las empresas, mezclando tácticas vanguardistas con un trato humanizado y visión a largo plazo.",
        bullets: [
          "Material de uso inmediato para tu rutina diaria",
          "Mentoría cercana y empática en todo el trayecto",
          "Métricas claras alineadas a tu flujo de trabajo",
        ],
      },
      featured: {
        eyebrow: "Catálogo",
        title: "Programas destacados",
        viewAll: "Ver todo el catálogo",
      },
      cta: {
        eyebrow: "Avanza al siguiente nivel",
        title: "Evoluciona tu estilo de gestión",
        desc: "Descubre planes de adiestramiento gerencial diseñados para talentos que desean sincronizar la táctica corporativa con la superación personal en una misma ruta educativa.",
      },
      buttons: {
        viewPrograms: "Explorar catálogo",
        contactUs: "Hablemos",
        planForYou: "Crea tu ruta",
        payRoute: "Pagar ruta",
      },
    },
    cart: {
      title: "Tu cesta de compras",
      empty: "Aún no tienes planes formativos en tu cesta.",
      explore: "Revisar catálogo",
      selectQty: "Elige la cantidad de participantes",
      addToCart: "Integrar a la cesta",
      estimatedTotal: "Inversión proyectada (Impuestos incluidos):",
      subtotal: "Monto parcial",
      taxes: "Los gravámenes (IVA 16%) se determinarán en la pasarela.",
      checkout: "Proceder al pago",
      viewCart: "Revisar cesta completa",
    },
    contact: {
      successTitle: "¡Tu solicitud fue recibida!",
      successDesc: "Agradecemos tu interés. Un especialista de nuestro equipo se comunicará contigo rápidamente.",
      sendAnother: "Generar nueva consulta",
      name: "Nombre y apellido",
      email: "Dirección de correo",
      subject: "Motivo de tu mensaje (Opcional)",
      message: "Tu mensaje",
      send: "Remitir información",
      sending: "Procesando...",
      placeholderName: "Tu nombre",
      placeholderEmail: "tucorreo@empresa.com",
      placeholderSubject: "¿En qué podemos ayudarte?",
      placeholderMessage: "Cuéntanos sobre ti o tu organización...",
    },
    customRoutePage: {
      title: "Descubre el conocimiento que transforma.",
      firstName: "Nombre *",
      lastName: "Apellidos *",
      email: "Correo Electrónico *",
      folio: "Número De Folio",
      amount: "Monto",
      payBtn: "Pagar",
      required: "Este campo es obligatorio.",
      invalidEmail: "Correo inválido.",
      invalidAmount: "Monto inválido (debe ser mayor a 0).",
    },
    cartPage: {
      emptyState: {
        title: "Tu cesta no tiene artículos",
        desc: "Revisa nuestra oferta de cursos y arma tu ruta de aprendizaje para ti y tu grupo.",
        btn: "Ver catálogo",
      },
      title: "Tu cesta",
      eyebrow: "Cesta de compra",
      itemsLabel: "elemento(s)",
      perPerson: "/ participante",
      summary: "Desglose",
      subtotal: "Subtotal",
      tax: "Impuestos (16%)",
      total: "Total final",
      checkoutBtn: "Proceder al pago",
      continueBtn: "Continuar viendo",
      secure: "Transacción protegida · Moneda: MXN",
    },
    checkoutPage: {
      title: "Finalizar compra",
      back: "Volver al carrito",
      success: {
        title: "¡Gracias por tu compra!",
        desc: "Tu pedido se ha registrado correctamente. Recibirás un correo de confirmación con los accesos a tus programas.",
        btnExplore: "Seguir explorando",
        btnHome: "Volver al inicio",
      },
      empty: {
        title: "No hay nada que pagar",
        desc: "Agrega programas a tu carrito para continuar con el checkout.",
        btn: "Ver programas",
      },
      billing: {
        title: "Detalles de facturación",
        firstName: "Nombre *",
        lastName: "Apellidos *",
        country: "País/Región *",
        street: "Dirección de la calle *",
        streetPlaceholder: "Número de la casa y nombre de la calle",
        suburbPlaceholder: "Colonia, Apartamento, habitación, etc. (opcional)",
        city: "Localidad / Ciudad *",
        state: "Región / Estado *",
        zip: "Código postal *",
        phone: "Teléfono (opcional)",
        email: "Dirección de correo electrónico *",
      },
      additional: {
        title: "Información adicional",
        notes: "Indicaciones del pedido (opcional)",
        notesPlaceholder: "Detalles adicionales del pedido, referencias de la dirección, etc."
      },
      summary: {
        title: "Tu pedido",
        product: "Producto",
        subtotal: "Subtotal",
        tax: "Impuesto",
        total: "Total",
        cardLabel: "Tarjeta de Crédito o débito.",
        paymentInfo: "Información de pago",
        cardHolder: "Nombre del titular de la tarjeta",
        cardNumber: "Número de tarjeta",
        expiry: "Fecha de vencimiento",
        cvc: "CVV",
        privacyNotice: "Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad.",
        payBtn: "Realizar el pedido",
        processing: "Procesando..."
      }
    },
    contactPage: {
      hero: {
        eyebrow: "Conversemos",
        title: "Enlace directo",
        crumb: "Enlace",
        desc: "¿Preparado para potenciar a tu grupo? Contáctanos y armaremos la estrategia perfecta.",
      },
      formTitle: "Mándanos tus dudas",
      formEyebrow: "Cuestionario",
      info: {
        email: "Casilla electrónica",
        phone: "Línea telefónica",
        address: "Coordenadas",
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "Nuestra esencia",
        title: "El equipo",
        crumb: "Esencia",
        desc: "Descubre el origen de Softurix, los profesionales detrás y nuestro enfoque en la educación gerencial. Creamos entornos formativos que mezclan táctica, filosofía corporativa y dirección.",
      },
      welcome: {
        eyebrow: "Hola",
        title: "Educación que evoluciona, crecimiento tangible",
        desc1: "Te recibimos en Softurix. Nuestra misión es guiar a especialistas y empresas hacia una evolución responsable, potenciando la guía de equipos, la identidad y la táctica.",
        desc2: "Confiamos en la educación que altera paradigmas y el progreso que deja huella. Forjemos en conjunto renovados estilos de mando.",
        badgeEyebrow: "Comunidad Softurix",
        badgeTitle: "Jefatura de Formación Directiva",
      },
      compass: {
        eyebrow: "Nuestra brújula",
        title: "Nuestros pilares diarios",
        mission: "Propósito",
        missionDesc: "Idear procesos educativos dinámicos y analíticos que afiancen la conducción de grupos y el ambiente laboral, guiando a talentos e instituciones hacia un avance firme y con sentido.",
        vision: "Proyección",
        visionDesc: "Posicionarnos como autoridad en adiestramiento gerencial, forjando guías empáticos y calculadores que renueven sus firmas frente a la variabilidad del mercado.",
        values: "Principios",
        valuesList: [
          "Calidad superior en capacitación directiva",
          "Empatía en la gestión",
          "Enseñanza práctica y enfocada en logros",
          "Sinergia y creación de redes",
          "Evolución y optimización constante",
        ],
      },
      cta: {
        eyebrow: "Inicia ahora",
        title: "Formaciones recién lanzadas",
        desc: "Ingresa a capacitaciones estructuradas para consolidar tu dirección, tu perspectiva táctica y tu avance laboral. Toma la iniciativa y emprende tu trayecto hoy.",
        btn: "Ver formaciones",
      },
    },
    productPage: {
      breadcrumb: "Servicios",
      detail: {
        ideal: "Perfil recomendado",
        includes: "Contenido",
        modality: "Formato",
        duration: "Tiempo estimado",
      },
      related: {
        title: "Opciones afines",
        viewAll: "Consultar todas",
      },
      taxNote: "MXN / participante + Impuestos",
    },
    servicesPage: {
      hero: {
        eyebrow: "Nuestra oferta",
        title: "Catálogo",
        crumb: "Catálogo",
        desc: "Explora trayectos educativos creados para afianzar competencias esenciales, potenciar el talento y provocar transformaciones reales en el entorno corporativo.",
      },
      countLabel: "cursos vigentes",
      taxNote: "Valores en MXN · Los impuestos se calculan al pagar",
    },
    product: {
      added: "Añadido al carrito",
      view: "Ver",
      currency: "MXN +IVA",
      viewMore: "Ver más",
    },
    footer: {
      tagline: "Formación que se traduce en resultados",
      desc: "Trabajamos de cerca con tu equipo para convertir el aprendizaje en decisiones mejor informadas, procesos más humanos y una gestión del talento de alto desempeño.",
      contactBtn: "Contáctanos",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
      addressText: "Torcuato Tasso No. 245 Piso 4, Despacho 401, Col. Polanco V Sección, Miguel Hidalgo, C.P. 11560, CDMX",
      rights: "© 2025 Softurix. Todos los derechos reservados.",
      legal: {
        privacy: "Aviso de Privacidad",
        terms: "Términos y condiciones",
        refund: "Política de devoluciones y reembolsos",
      }
    },
    legal: {
      terminos: {
        title: "Términos y condiciones",
        sections: [
          {
            title: "ACEPTACIÓN DE LOS TÉRMINOS",
            content: "El presente documento establece los Términos y Condiciones bajo los cuales los usuarios pueden acceder y utilizar el sitio web softurix.com (en adelante, el “Sitio”) y los servicios ofrecidos por HOFFI LEARNING S.A. DE C.V. (SOFTURIX) (en adelante, “SOFTURIX”).\n\nAl acceder, navegar o realizar cualquier compra dentro del Sitio, el usuario declara haber leído, comprendido y aceptado estos Términos y Condiciones, así como el Aviso de Privacidad publicado en el mismo sitio. En caso de no estar de acuerdo con cualquiera de las disposiciones aquí contenidas, deberá abstenerse de utilizar el Sitio o los servicios ofrecidos."
          },
          {
            title: "IDENTIDAD DEL PRESTADOR DEL SERVICIO",
            content: "Razón social: HOFFI LEARNING S.A. DE C.V.\nDomicilio: Torcuato Tasso 245 Piso 4 Despacho 401, Col. Polanco V Sección, Miguel Hidalgo, C.P. 11560, Ciudad De México\nCorreo electrónico de contacto: info@softurix.com\nSitio web: softurix.com"
          },
          {
            title: "DESCRIPCIÓN DE LOS SERVICIOS",
            content: "SOFTURIX ofrece cursos, talleres, diplomados y servicios de capacitación en línea, con acceso a materiales audiovisuales, ejercicios, foros de discusión y sesiones interactivas, según el curso seleccionado.\n\nLos contenidos se ofrecen en modalidad 100% digital, sin entrega física de materiales, y están destinados a personas mayores de edad o empresas que buscan formación profesional en áreas de negocios, liderazgo, marketing, recursos humanos y temas relacionados."
          },
          {
            title: "REGISTRO Y CUENTAS DE USUARIO",
            content: "Para acceder a determinados servicios o contenidos, el usuario deberá registrarse y crear una cuenta personal, proporcionando datos veraces, completos y actualizados.\n\nEl usuario será responsable del uso confidencial de sus credenciales de acceso (correo electrónico y contraseña), comprometiéndose a no compartirlas con terceros.\n\nSOFTURIX no será responsable por el uso indebido derivado del manejo inadecuado de las credenciales por parte del usuario.\n\nSOFTURIX se reserva el derecho de suspender o cancelar cuentas que infrinjan estos Términos, o que presenten actividad fraudulenta, abusiva o contraria a las buenas prácticas."
          },
          {
            title: "PRECIOS Y FORMAS DE PAGO",
            content: "Todos los precios publicados en el Sitio están expresados en pesos mexicanos (MXN) e incluyen el Impuesto al Valor Agregado (IVA) correspondiente, salvo que se indique lo contrario.\n\nLos pagos se realizan únicamente mediante tarjeta de crédito o débito, a través de las pasarelas de pago seguras habilitadas en el Sitio.\n\nSOFTURIX no almacena datos completos de tarjetas; el procesamiento es realizado directamente por los proveedores de pago certificados conforme a los estándares PCI-DSS.\n\nEl pago total debe completarse antes de otorgar acceso al curso o servicio adquirido.\n\nUna vez confirmado el pago, el usuario recibirá un correo de confirmación y acceso con los datos de inicio de sesión o instrucciones correspondientes."
          },
          {
            title: "ACCESO A LOS CURSOS Y VIGENCIA",
            content: "El acceso a los cursos y materiales digitales estará disponible durante el plazo determinado en cada programa o plan adquirido.\n\nUna vez vencido el plazo, el acceso podrá deshabilitarse automáticamente, salvo que el usuario adquiera una extensión o servicio adicional."
          },
          {
            title: "PROPIEDAD INTELECTUAL",
            content: "Todo el contenido del Sitio —incluyendo videos, textos, imágenes, audios, logotipos, materiales descargables, interfaces, estructuras y códigos— es propiedad exclusiva de SOFTURIX o de sus licenciantes, y se encuentra protegido por la legislación mexicana e internacional en materia de derechos de autor y propiedad industrial.\n\nEl usuario se compromete a:\n• No copiar, distribuir, reproducir o compartir el contenido con terceros.\n• No grabar, descargar ni publicar los materiales en otras plataformas.\n• No usar los contenidos con fines comerciales, salvo autorización expresa y por escrito de SOFTURIX.\n\nEl incumplimiento de esta cláusula podrá dar lugar a acciones legales civiles y/o penales conforme a la ley aplicable."
          },
          {
            title: "USO ADECUADO DE LOS SERVICIOS",
            content: "El usuario se obliga a utilizar el Sitio y los servicios de forma lícita, ética y conforme a los presentes Términos.\n\nQueda estrictamente prohibido:\n• Suplantar identidades o registrar cuentas falsas.\n• Intentar vulnerar la seguridad o funcionamiento del Sitio.\n• Utilizar los servicios para actividades fraudulentas, ilegales o que afecten a terceros.\n\nSOFTURIX podrá suspender o dar de baja la cuenta del usuario sin previo aviso si detecta cualquiera de estas conductas."
          },
          {
            title: "POLÍTICA DE CANCELACIÓN Y REEMBOLSO",
            content: "El usuario podrá solicitar reembolso únicamente conforme a la Política de Reembolsos publicada en el Sitio, la cual forma parte integrante de estos Términos y Condiciones."
          },
          {
            title: "RESPONSABILIDAD Y LIMITACIÓN DE GARANTÍAS",
            content: "SOFTURIX no garantiza que los servicios estén libres de interrupciones o errores, aunque realiza esfuerzos razonables para mantener la disponibilidad y calidad de la plataforma.\n\nLos cursos y materiales se ofrecen “tal cual” y no sustituyen asesorías profesionales o consultorías personalizadas. SOFTURIX no será responsable por decisiones o acciones que los usuarios tomen basadas en los contenidos ofrecidos."
          },
          {
            title: "CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS",
            content: "SOFTURIX tratará toda la información personal conforme a lo establecido en su Aviso de Privacidad, disponible en softurix.com/aviso-de-privacidad."
          },
          {
            title: "MODIFICACIONES",
            content: "SOFTURIX se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones, así como los precios o características de los servicios, sin previo aviso."
          },
          {
            title: "LEGISLACIÓN Y JURISDICCIÓN APLICABLE",
            content: "Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos, y cualquier controversia será sometida a los tribunales competentes de la Ciudad de México."
          },
          {
            title: "CONTACTO",
            content: "Para aclaraciones, soporte o dudas sobre estos Términos, puede comunicarse al correo electrónico info@softurix.com o utilizar los medios de contacto disponibles en el Sitio."
          }
        ]
      },
      reembolsos: {
        title: "Política de devoluciones y reembolsos",
        subtitle: "HOFFI LEARNING S.A. DE C.V. (SOFTURIX)",
        sections: [
          {
            title: "INTRODUCCIÓN",
            content: "La presente Política tiene como finalidad establecer los términos y condiciones bajo los cuales los usuarios podrán solicitar reembolsos o cancelaciones de pagos realizados por los cursos, talleres, diplomados o servicios de capacitación en línea adquiridos a través del sitio web softurix.com, propiedad de HOFFI LEARNING S.A. DE C.V. (SOFTURIX).\n\nAl realizar una compra en el Sitio, el usuario declara haber leído y aceptado tanto esta Política de Reembolsos como los Términos y Condiciones y el Aviso de Privacidad."
          },
          {
            title: "NATURALEZA DE LOS SERVICIOS",
            content: "Los servicios ofrecidos por SOFTURIX son intangibles, personalizados y de entrega digital inmediata, al tratarse de acceso a cursos, materiales audiovisuales y recursos educativos en línea."
          },
          {
            title: "SUPUESTOS EN LOS QUE PROCEDERÁ EL REEMBOLSO",
            content: "SOFTURIX podrá autorizar un reembolso únicamente en los siguientes casos:\n• Cuando el cargo se haya efectuado de manera duplicada por error del sistema o de la pasarela de pago.\n• Cuando el usuario no haya recibido el acceso al curso dentro de las 48 horas hábiles posteriores a la confirmación del pago, siempre que el retraso sea atribuible a SOFTURIX.\n• Cuando exista un error imputable a la empresa en la descripción del servicio adquirido (por ejemplo, curso incorrecto o paquete distinto al contratado).\n• Cuando, por causas imputables a SOFTURIX, el curso o programa no pueda impartirse o sea cancelado definitivamente.\n\nEn cualquiera de estos casos, el usuario deberá solicitar el reembolso conforme al procedimiento establecido en el punto siguiente."
          },
          {
            title: "PROCEDIMIENTO PARA SOLICITAR UN REEMBOLSO",
            content: "Para tramitar una solicitud de reembolso, el usuario deberá enviar un correo electrónico a info@softurix.com con el asunto “Solicitud de reembolso”, incluyendo la siguiente información:\n• Nombre completo del titular de la compra.\n• Correo electrónico con el que se realizó la compra.\n• Comprobante de pago (captura o recibo).\n• Descripción clara del motivo de la solicitud.\n• Fecha de compra y nombre del curso o servicio.\n\nSOFTURIX revisará cada caso de manera individual y responderá por correo electrónico dentro de un plazo máximo de 10 (diez) días hábiles contados a partir de la recepción de la solicitud.\n\nSi la solicitud es procedente, el reembolso se realizará mediante el mismo método de pago utilizado en la compra, a la tarjeta de crédito o débito correspondiente, y estará sujeto a los tiempos de procesamiento del banco emisor, que pueden variar entre 5 y 15 días hábiles posteriores a la confirmación de SOFTURIX."
          },
          {
            title: "SUPUESTOS EN LOS QUE NO PROCEDERÁ EL REEMBOLSO",
            content: "No se realizarán reembolsos en los siguientes casos:\n• Cuando el usuario haya accedido parcial o totalmente al contenido digital del curso, taller o diplomado.\n• Cuando la solicitud se base en inconformidad con la metodología, estilo o resultados del curso, al tratarse de experiencias subjetivas.\n• Cuando el curso haya sido adquirido a través de promociones, cupones o descuentos especiales.\n• Cuando la solicitud se presente fuera del plazo o sin la información requerida.\n• Por fallas técnicas atribuibles al dispositivo, conexión a internet o software del usuario."
          },
          {
            title: "CANCELACIONES",
            content: "En caso de que el usuario desee cancelar su compra antes de acceder al contenido del curso, podrá solicitar la cancelación dentro de las primeras 24 horas posteriores al pago, siempre que el acceso no haya sido activado.\n\nEl proceso de cancelación deberá solicitarse por correo a info@softurix.com y una vez verificada la elegibilidad, se procederá al reembolso bajo los mismos plazos establecidos en el punto PROCEDIMIENTO PARA SOLICITAR UN REEMBOLSO."
          },
          {
            title: "MODIFICACIONES Y SUSPENSIONES DE SERVICIOS",
            content: "SOFTURIX se reserva el derecho de modificar la estructura, duración o materiales de los cursos ofrecidos, siempre que dichas modificaciones no afecten de manera sustancial los objetivos de aprendizaje del usuario."
          },
          {
            title: "CONTACTO",
            content: "Para cualquier duda, aclaración o solicitud relacionada con esta Política de Reembolsos, el usuario puede comunicarse al correo electrónico info@softurix.com o a través de los medios de contacto disponibles en el sitio web softurix.com."
          },
          {
            title: "ACEPTACIÓN",
            content: "Al realizar una compra o registrarse en el Sitio, el usuario reconoce haber leído, comprendido y aceptado expresamente los términos establecidos en esta Política de Reembolsos."
          }
        ]
      },
      privacidad: {
        title: "Política de privacidad",
        subtitle: "HOFFI LEARNING S.A. DE C.V. (Softurix)",
        sections: [
          {
            title: "IDENTIDAD Y DOMICILIO DEL RESPONSABLE",
            content: "HOFFI LEARNING S.A. DE C.V. (en adelante, “Softurix”), con domicilio en Torcuato Tasso 245 Piso 4 Despacho 401, Col. Polanco V Sección, Miguel Hidalgo, C.P. 11560, Ciudad De México es responsable del tratamiento, uso y protección de los datos personales que recaba de sus clientes, usuarios y visitantes de su sitio web softurix.com.\n\nPara cualquier asunto relacionado con el tratamiento de sus datos personales, podrá comunicarse al correo electrónico info@softurix.com"
          },
          {
            title: "DATOS PERSONALES QUE SE RECABAN",
            content: "Softurix podrá recopilar los siguientes datos personales de manera directa o indirecta, cuando usted:\n• Visita el sitio web o utiliza nuestros formularios de contacto.\n• Se registra para adquirir cursos, talleres o diplomados en línea.\n• Realiza pagos a través de las plataformas habilitadas.\n• Solicita información o soporte técnico.\n\nDatos recabados:\n• Nombre completo.\n• Correo electrónico.\n• Teléfono de contacto.\n• Domicilio fiscal (en caso de requerir factura).\n• Datos de facturación (RFC, razón social).\n• Datos financieros limitados (banco emisor y tipo de tarjeta).\n\nSofturix no almacena ni procesa directamente datos completos de tarjetas de crédito o débito; el procesamiento se realiza a través de pasarelas de pago certificadas y seguras."
          },
          {
            title: "FINALIDADES DEL TRATAMIENTO DE LOS DATOS PERSONALES",
            content: "Los datos personales recabados se utilizarán para las siguientes finalidades primarias:\n• Registrar y administrar su acceso a los cursos, talleres o diplomados ofrecidos por Softurix.\n• Gestionar pagos, facturación y emisión de comprobantes fiscales digitales.\n• Brindar soporte técnico, atención al cliente y seguimiento académico.\n• Cumplir con obligaciones derivadas de la contratación de servicios y cursos.\n• Enviar notificaciones relacionadas con su cuenta o servicios contratados.\n\nY para las siguientes finalidades secundarias, que no son necesarias para la prestación del servicio, pero permiten brindarle una mejor experiencia:\n• Envío de información promocional sobre nuevos cursos, descuentos y eventos.\n• Evaluación de calidad y satisfacción del servicio.\n• Realización de encuestas o análisis de mercado.\n• Estadísticas internas y mejora de la experiencia del usuario.\n\nEn caso de que no desee que sus datos se utilicen para fines secundarios, puede manifestarlo enviando un correo a info@softurix.com con el asunto “Negativa de tratamiento para finalidades secundarias”."
          },
          {
            title: "USO DE COOKIES Y TECNOLOGÍAS SIMILARES",
            content: "Softurix utiliza cookies, web beacons y otras tecnologías de rastreo para mejorar su experiencia en el sitio web, analizar tráfico y personalizar contenido.\n\nLas cookies pueden recopilar información como:\n• Dirección IP.\n• Tipo de navegador y dispositivo.\n• Páginas visitadas dentro del sitio.\n• Duración de la visita.\n\nUsted puede desactivar o eliminar las cookies desde la configuración de su navegador; sin embargo, hacerlo podría afectar algunas funciones del sitio."
          },
          {
            title: "TRANSFERENCIA DE DATOS PERSONALES",
            content: "Softurix podrá compartir sus datos personales con terceros nacionales o extranjeros en los siguientes casos:\n• Autoridades fiscales o administrativas (cuando la ley así lo requiera).\n• Proveedores de servicios de hospedaje web, correo electrónico o herramientas digitales, necesarios para la operación del sitio.\n\nEn todos los casos, se adoptarán las medidas de seguridad necesarias para garantizar que los terceros traten los datos conforme a la LFPDPPP y este Aviso de Privacidad."
          },
          {
            title: "MEDIDAS DE SEGURIDAD",
            content: "Softurix aplica medidas administrativas, técnicas y físicas de seguridad con el propósito de garantizar la integridad, confidencialidad y disponibilidad de los datos personales bajo su resguardo, previniendo cualquier daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.\n\nEstas medidas se implementan conforme a los principios y obligaciones establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, e incluyen, de manera enunciativa más no limitativa, las siguientes acciones:\n\nMedidas Administrativas\n• Establecimiento de políticas internas de privacidad y confidencialidad, aplicables a todo el personal que interviene en el tratamiento de datos personales.\n• Capacitación y sensibilización periódica del personal sobre el manejo responsable de la información y las obligaciones legales derivadas del tratamiento de datos personales.\n• Implementación de acuerdos de confidencialidad con empleados, proveedores y terceros que tengan acceso a la información.\n• Procedimientos internos para la gestión de incidentes de seguridad, que incluyen notificación, contención, análisis y medidas correctivas.\n\nMedidas Técnicas\n• Uso de conexiones seguras (SSL) en todo el sitio web, garantizando la transmisión cifrada de la información proporcionada por los usuarios.\n• Cifrado de contraseñas y datos sensibles, aplicando estándares de encriptación reconocidos internacionalmente.\n• Control de acceso electrónico mediante autenticación y credenciales únicas para los sistemas internos que manejan datos personales.\n• Monitoreo y auditorías periódicas para detectar accesos no autorizados o vulnerabilidades en los sistemas.\n• Copias de seguridad (backups) cifradas de la información esencial para prevenir pérdida o corrupción de datos.\n\nMedidas Físicas\n• Restricción de acceso físico a las instalaciones y servidores donde se almacenan los datos personales, mediante controles de ingreso y vigilancia.\n• Almacenamiento seguro de documentos físicos en espacios cerrados, con acceso exclusivo a personal autorizado.\n• Implementación de medidas de respaldo y protección contra siniestros, como sistemas de detección de incendios, control ambiental y energía regulada para los equipos que alojan información.\n\nSupervisión y Mejora Continua\nSofturix mantiene un proceso de evaluación y mejora continua de sus medidas de seguridad, con revisiones periódicas que permiten adecuarlas a los avances tecnológicos, a las recomendaciones de autoridades competentes y a la evolución de las amenazas informáticas.\n\nEn caso de presentarse un incidente de seguridad que afecte de forma significativa los derechos patrimoniales o morales de los titulares, Softurix notificará de inmediato al titular afectado, conforme al procedimiento previsto por la LFPDPPP."
          },
          {
            title: "DERECHOS ARCO (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN)",
            content: "Usted tiene derecho a acceder a sus datos personales, rectificarlos si son incorrectos, cancelarlos cuando considere que ya no son necesarios o oponerse a su tratamiento para fines específicos.\n\nPara ejercer sus derechos ARCO, deberá enviar un correo electrónico a info@softurix.com con la siguiente información:\n• Nombre completo y medio de contacto.\n• Descripción clara de la solicitud.\n• Documentos que acrediten su identidad o representación legal.\n\nEl área correspondiente atenderá su solicitud en un plazo máximo de 20 días hábiles contados a partir de su recepción."
          },
          {
            title: "LIMITACIÓN Y REVOCACIÓN DEL CONSENTIMIENTO",
            content: "En cualquier momento, usted puede revocar su consentimiento para el tratamiento de sus datos personales enviando su solicitud a info@softurix.com, indicando expresamente qué uso desea revocar.\n\nAsimismo, puede limitar el uso o divulgación de sus datos registrándose en el listado de exclusión interno de Softurix."
          },
          {
            title: "CONSERVACIÓN Y PLAZOS DE LOS DATOS",
            content: "Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades señaladas o mientras exista relación contractual.\n\nEn caso de usuarios inscritos en cursos o diplomados, la información se conservará hasta por info@softurix.com después de concluido el curso, salvo disposición legal que exija otro plazo."
          },
          {
            title: "CAMBIOS AL AVISO DE PRIVACIDAD",
            content: "Softurix se reserva el derecho de modificar o actualizar este Aviso de Privacidad para reflejar cambios legales, técnicos o comerciales.\n\nLas modificaciones serán publicadas en softurix.com/aviso-de-privacidad y entrarán en vigor a partir de su publicación."
          },
          {
            title: "ACEPTACIÓN",
            content: "Al utilizar el sitio web y/o adquirir cualquiera de los servicios ofrecidos por Softurix, usted manifiesta haber leído, entendido y aceptado los términos de este Aviso de Privacidad"
          }
        ]
      }
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "Our Essence",
      services: "Catalog",
      contact: "Reach Out",
      plan: "Your Ideal Path",
      announcement: "Digital corporate training · Instant availability · Billing in MXN",
    },
    home: {
      hero: {
        eyebrow: "Digital corporate training",
        titleLine1: "We develop leaders",
        titleLine2: "who ",
        titleHighlight: "evolve",
        titleLine3: "companies",
        desc: "We create effective learning journeys for professionals and teams determined to expand with clear goals. We merge tactics, identity, and corporate direction.",
        stats: {
          programs: "Courses",
          online: "Digital",
          grads: "Graduates",
        },
        collage: {
          box1Title: "Tactics, identity, and direction",
          box1Desc: "integrated into a single experience.",
          box2Eyebrow: "Achievements",
          box2Title: "Enduring and quantifiable",
        },
      },
      marquee: [
        "Empowering talents",
        "Tangible achievements",
        "Responsible leadership",
        "Comprehensive education",
        "Significant advancement",
      ],
      business: {
        eyebrow: "Corporate evolution",
        title: "Expansion that unites human talent with business goals",
        desc1: "We foster the evolution of professionals and corporations by unifying tactics, identity, and direction, promoting assertive decisions and a commercial approach focused on lasting achievements.",
        desc2: "We blend specialized knowledge with essential management and communication skills to revamp your team's work dynamics.",
      },
      programs: {
        eyebrow: "Executive plans",
        title: "A structured system for specialists with demanding schedules",
        items: [
          { n: "01", title: "Online Modality", text: "Learn from any location with access to digital platforms, interactive resources, and guided sessions." },
          { n: "02", title: "Flexible Pace", text: "Formats that adjust to your professional schedule, with modules designed to respond to your real needs." },
          { n: "03", title: "Real Application", text: "Work with real challenges, guided exercises, and tools ready to use in your daily work life." },
          { n: "04", title: "Useful Materials", text: "Get guides, formats, and practical resources to support your everyday activities and decisions." },
          { n: "05", title: "Human Focus", text: "We strengthen leadership, communication, and conscious management to boost team collaboration and well-being." },
          { n: "06", title: "Culture and Meaning", text: "We integrate values and practices that strengthen identity, collaboration, and clear-purpose leadership." },
        ],
      },
      integral: {
        eyebrow: "Holistic preparation",
        title: "Courses structured to face authentic challenges",
        desc: "We craft growth paths that solve current business challenges, mixing cutting-edge tactics with a humanized approach and a long-term vision.",
        bullets: [
          "Ready-to-use material for your daily routine",
          "Close and empathetic mentoring throughout the journey",
          "Clear metrics aligned with your workflow",
        ],
      },
      featured: {
        eyebrow: "Catalog",
        title: "Featured programs",
        viewAll: "View full catalog",
      },
      cta: {
        eyebrow: "Advance to the next level",
        title: "Evolve your management style",
        desc: "Discover managerial training plans designed for talents who wish to synchronize corporate tactics with personal growth in the same educational path.",
      },
      buttons: {
        viewPrograms: "Explore catalog",
        contactUs: "Let's talk",
        planForYou: "Create your path",
        payRoute: "Pay route",
      },
    },
    cart: {
      title: "Your shopping basket",
      empty: "You have no training plans in your basket yet.",
      explore: "Review catalog",
      selectQty: "Choose the number of participants",
      addToCart: "Add to basket",
      estimatedTotal: "Projected investment (Taxes included):",
      subtotal: "Subtotal",
      taxes: "Taxes (16% VAT) will be calculated at checkout.",
      checkout: "Proceed to payment",
      viewCart: "Review full basket",
    },
    contact: {
      successTitle: "Your request was received!",
      successDesc: "We appreciate your interest. A specialist from our team will contact you shortly.",
      sendAnother: "Generate new inquiry",
      name: "Full name",
      email: "Email address",
      subject: "Reason for your message (Optional)",
      message: "Your message",
      send: "Submit information",
      sending: "Processing...",
      placeholderName: "Your name",
      placeholderEmail: "youremail@company.com",
      placeholderSubject: "How can we help you?",
      placeholderMessage: "Tell us about yourself or your organization...",
    },
    customRoutePage: {
      title: "Discover the knowledge that transforms.",
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email *",
      folio: "Folio Number",
      amount: "Amount",
      payBtn: "Pay",
      required: "This field is required.",
      invalidEmail: "Invalid email format.",
      invalidAmount: "Invalid amount (must be greater than 0).",
    },
    cartPage: {
      emptyState: {
        title: "Your basket has no items",
        desc: "Review our course offerings and build your learning path for you and your group.",
        btn: "View catalog",
      },
      title: "Your basket",
      eyebrow: "Shopping basket",
      itemsLabel: "item(s)",
      perPerson: "/ participant",
      summary: "Breakdown",
      subtotal: "Subtotal",
      tax: "Taxes (16%)",
      total: "Final Total",
      checkoutBtn: "Proceed to checkout",
      continueBtn: "Continue browsing",
      secure: "Protected transaction · Currency: MXN",
    },
    checkoutPage: {
      title: "Complete transaction",
      back: "Back to basket",
      success: {
        title: "Thank you for your purchase!",
        desc: "Your order has been registered successfully. You will receive a confirmation email with access to your programs.",
        btnExplore: "Keep browsing",
        btnHome: "Back to home",
      },
      empty: {
        title: "Nothing to pay",
        desc: "Add programs to your basket to proceed to checkout.",
        btn: "View programs",
      },
      billing: {
        title: "Billing details",
        firstName: "First Name *",
        lastName: "Last Name *",
        country: "Country/Region *",
        street: "Street address *",
        streetPlaceholder: "House number and street name",
        suburbPlaceholder: "Suburb, Apartment, suite, etc. (optional)",
        city: "Town / City *",
        state: "State / Region *",
        zip: "Zip Code *",
        phone: "Phone (optional)",
        email: "Email address *",
      },
      additional: {
        title: "Additional information",
        notes: "Order notes (optional)",
        notesPlaceholder: "Additional details about your order, special notes for delivery, etc."
      },
      summary: {
        title: "Your order",
        product: "Product",
        subtotal: "Subtotal",
        tax: "Tax",
        total: "Total",
        cardLabel: "Credit or debit card.",
        paymentInfo: "Payment information",
        cardHolder: "Cardholder name",
        cardNumber: "Card number",
        expiry: "Expiration date",
        cvc: "CVC",
        privacyNotice: "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.",
        payBtn: "Place order",
        processing: "Processing..."
      }
    },
    contactPage: {
      hero: {
        eyebrow: "Let's converse",
        title: "Direct link",
        crumb: "Link",
        desc: "Ready to empower your group? Contact us and we will build the perfect strategy.",
      },
      formTitle: "Send us your doubts",
      formEyebrow: "Questionnaire",
      info: {
        email: "Electronic mail",
        phone: "Phone line",
        address: "Coordinates",
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "Our essence",
        title: "The team",
        crumb: "Essence",
        desc: "Discover the origin of Softurix, the professionals behind it, and our focus on managerial education. We create training environments that blend tactics, corporate philosophy, and direction.",
      },
      welcome: {
        eyebrow: "Hello",
        title: "Education that evolves, tangible growth",
        desc1: "We welcome you to Softurix. Our mission is to guide specialists and companies towards a responsible evolution, empowering team guidance, identity, and tactics.",
        desc2: "We trust in education that alters paradigms and progress that leaves a mark. Let's forge together renewed leadership styles.",
        badgeEyebrow: "Softurix Community",
        badgeTitle: "Head of Directive Training",
      },
      compass: {
        eyebrow: "Our compass",
        title: "Our daily pillars",
        mission: "Purpose",
        missionDesc: "Devise dynamic and analytical educational processes that consolidate group guidance and the work environment, guiding talents and institutions towards a firm and meaningful advance.",
        vision: "Projection",
        visionDesc: "Position ourselves as an authority in managerial training, forging empathetic and calculating guides who renew their firms in the face of market variability.",
        values: "Principles",
        valuesList: [
          "Superior quality in directive training",
          "Empathy in management",
          "Practical teaching focused on achievements",
          "Synergy and network creation",
          "Constant evolution and optimization",
        ],
      },
      cta: {
        eyebrow: "Start now",
        title: "Newly launched trainings",
        desc: "Enter structured trainings to consolidate your direction, your tactical perspective, and your professional advance. Take the initiative and embark on your journey today.",
        btn: "View trainings",
      },
    },
    productPage: {
      breadcrumb: "Services",
      detail: {
        ideal: "Recommended profile",
        includes: "Content",
        modality: "Format",
        duration: "Estimated time",
      },
      related: {
        title: "Related options",
        viewAll: "View all",
      },
      taxNote: "MXN / participant + Taxes",
    },
    servicesPage: {
      hero: {
        eyebrow: "Our offer",
        title: "Catalog",
        crumb: "Catalog",
        desc: "Explore educational journeys created to consolidate essential competencies, boost talent, and cause real transformations in the corporate environment.",
      },
      countLabel: "active courses",
      taxNote: "Values in MXN · Taxes are calculated at checkout",
    },
    product: {
      added: "Added to cart",
      view: "View",
      currency: "MXN +VAT",
      viewMore: "View more",
    },
    footer: {
      tagline: "Training that translates into results",
      desc: "We work closely with your team to turn learning into better-informed decisions, more human processes, and high-performance talent management.",
      contactBtn: "Contact us",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressText: "Torcuato Tasso No. 245 Floor 4, Office 401, Col. Polanco V Section, Miguel Hidalgo, C.P. 11560, CDMX",
      rights: "© 2025 Softurix. All rights reserved.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        refund: "Refund Policy",
      }
    },
    legal: {
      terminos: {
        title: "Terms and conditions",
        sections: [
          {
            title: "ACCEPTANCE OF TERMS",
            content: "This document establishes the Terms and Conditions under which users may access and use the softurix.com website (hereinafter, the “Site”) and the services offered by HOFFI LEARNING S.A. DE C.V. (SOFTURIX) (hereinafter, “SOFTURIX”).\n\nBy accessing, browsing or making any purchase within the Site, the user declares to have read, understood and accepted these Terms and Conditions, as well as the Privacy Notice published on the same site. If you do not agree with any of the provisions contained herein, you must refrain from using the Site or the services offered."
          },
          {
            title: "IDENTITY OF THE SERVICE PROVIDER",
            content: "Company name: HOFFI LEARNING S.A. DE C.V.\nAddress: Torcuato Tasso 245 Floor 4 Office 401, Col. Polanco V Section, Miguel Hidalgo, C.P. 11560, Mexico City\nContact email: info@softurix.com\nWebsite: softurix.com"
          },
          {
            title: "DESCRIPTION OF SERVICES",
            content: "SOFTURIX offers online courses, workshops, diploma programs, and training services, with access to audiovisual materials, exercises, discussion forums, and interactive sessions, depending on the selected course.\n\nThe contents are offered 100% digitally, without physical delivery of materials, and are intended for adults or companies seeking professional training in business, leadership, marketing, human resources, and related areas."
          },
          {
            title: "REGISTRATION AND USER ACCOUNTS",
            content: "To access certain services or content, the user must register and create a personal account, providing truthful, complete, and updated data.\n\nThe user will be responsible for the confidential use of their access credentials (email and password), agreeing not to share them with third parties.\n\nSOFTURIX will not be responsible for the misuse resulting from the improper handling of credentials by the user.\n\nSOFTURIX reserves the right to suspend or cancel accounts that violate these Terms, or that present fraudulent, abusive, or contrary to good practices activity."
          },
          {
            title: "PRICES AND PAYMENT METHODS",
            content: "All prices published on the Site are expressed in Mexican pesos (MXN) and include the corresponding Value Added Tax (VAT), unless otherwise indicated.\n\nPayments are made only by credit or debit card, through the secure payment gateways enabled on the Site.\n\nSOFTURIX does not store complete card data; the processing is done directly by payment providers certified under PCI-DSS standards.\n\nTotal payment must be completed before granting access to the acquired course or service.\n\nOnce the payment is confirmed, the user will receive a confirmation and access email with the corresponding login details or instructions."
          },
          {
            title: "ACCESS TO COURSES AND VALIDITY",
            content: "Access to courses and digital materials will be available during the period specified in each acquired program or plan.\n\nOnce the term expires, access may be automatically disabled, unless the user purchases an extension or additional service."
          },
          {
            title: "INTELLECTUAL PROPERTY",
            content: "All the content of the Site —including videos, texts, images, audios, logos, downloadable materials, interfaces, structures, and codes— is the exclusive property of SOFTURIX or its licensors, and is protected by Mexican and international legislation on copyright and industrial property.\n\nThe user agrees to:\n• Not copy, distribute, reproduce or share the content with third parties.\n• Not record, download or publish the materials on other platforms.\n• Not use the content for commercial purposes, except with express written authorization from SOFTURIX.\n\nFailure to comply with this clause may result in civil and/or criminal legal actions according to the applicable law."
          },
          {
            title: "PROPER USE OF SERVICES",
            content: "The user agrees to use the Site and services in a lawful, ethical manner, and in accordance with these Terms.\n\nIt is strictly prohibited to:\n• Impersonate identities or register false accounts.\n• Attempt to breach the security or operation of the Site.\n• Use the services for fraudulent, illegal activities or activities that affect third parties.\n\nSOFTURIX may suspend or terminate the user's account without prior notice if it detects any of these behaviors."
          },
          {
            title: "CANCELLATION AND REFUND POLICY",
            content: "The user may request a refund only in accordance with the Refund Policy published on the Site, which forms an integral part of these Terms and Conditions."
          },
          {
            title: "LIABILITY AND LIMITATION OF WARRANTIES",
            content: "SOFTURIX does not guarantee that the services will be free of interruptions or errors, although it makes reasonable efforts to maintain the availability and quality of the platform.\n\nThe courses and materials are offered “as is” and do not replace professional advice or personalized consulting. SOFTURIX will not be responsible for decisions or actions that users take based on the content offered."
          },
          {
            title: "CONFIDENTIALITY AND DATA PROTECTION",
            content: "SOFTURIX will treat all personal information in accordance with the provisions of its Privacy Notice, available at softurix.com/aviso-de-privacidad."
          },
          {
            title: "MODIFICATIONS",
            content: "SOFTURIX reserves the right to modify these Terms and Conditions at any time, as well as the prices or characteristics of the services, without prior notice."
          },
          {
            title: "APPLICABLE LEGISLATION AND JURISDICTION",
            content: "These Terms and Conditions are governed by the laws of the United Mexican States, and any dispute will be submitted to the competent courts of Mexico City."
          },
          {
            title: "CONTACT",
            content: "For clarifications, support or questions about these Terms, you can contact the email info@softurix.com or use the contact methods available on the Site."
          }
        ]
      },
      reembolsos: {
        title: "Return and refund policy",
        subtitle: "HOFFI LEARNING S.A. DE C.V. (SOFTURIX)",
        sections: [
          {
            title: "INTRODUCTION",
            content: "The purpose of this Policy is to establish the terms and conditions under which users may request refunds or cancellations of payments made for online courses, workshops, diplomas or training services purchased through the softurix.com website, owned by HOFFI LEARNING S.A. DE C.V. (SOFTURIX).\n\nBy making a purchase on the Site, the user declares to have read and accepted both this Refund Policy and the Terms and Conditions and the Privacy Notice."
          },
          {
            title: "NATURE OF SERVICES",
            content: "The services offered by SOFTURIX are intangible, personalized and of immediate digital delivery, as they involve access to online courses, audiovisual materials and educational resources."
          },
          {
            title: "CASES IN WHICH A REFUND WILL PROCEED",
            content: "SOFTURIX may authorize a refund only in the following cases:\n• When the charge has been made in duplicate due to a system or payment gateway error.\n• When the user has not received access to the course within 48 business hours after payment confirmation, provided that the delay is attributable to SOFTURIX.\n• When there is an error attributable to the company in the description of the purchased service (for example, incorrect course or package different from the contracted one).\n• When, due to causes attributable to SOFTURIX, the course or program cannot be taught or is permanently cancelled.\n\nIn any of these cases, the user must request the refund according to the procedure established in the following point."
          },
          {
            title: "PROCEDURE TO REQUEST A REFUND",
            content: "To process a refund request, the user must send an email to info@softurix.com with the subject “Refund request”, including the following information:\n• Full name of the purchase holder.\n• Email with which the purchase was made.\n• Proof of payment (screenshot or receipt).\n• Clear description of the reason for the request.\n• Date of purchase and name of the course or service.\n\nSOFTURIX will review each case individually and respond by email within a maximum period of 10 (ten) business days from the receipt of the request.\n\nIf the request is valid, the refund will be made through the same payment method used in the purchase, to the corresponding credit or debit card, and will be subject to the processing times of the issuing bank, which can vary between 5 and 15 business days after confirmation from SOFTURIX."
          },
          {
            title: "CASES IN WHICH A REFUND WILL NOT PROCEED",
            content: "Refunds will not be made in the following cases:\n• When the user has partially or fully accessed the digital content of the course, workshop or diploma.\n• When the request is based on disagreement with the methodology, style or results of the course, as these are subjective experiences.\n• When the course has been purchased through promotions, coupons or special discounts.\n• When the request is submitted outside the deadline or without the required information.\n• For technical failures attributable to the user's device, internet connection or software."
          },
          {
            title: "CANCELLATIONS",
            content: "In case the user wishes to cancel their purchase before accessing the course content, they may request cancellation within the first 24 hours after payment, provided that access has not been activated.\n\nThe cancellation process must be requested by email to info@softurix.com and once eligibility is verified, the refund will proceed under the same terms established in the PROCEDURE TO REQUEST A REFUND point."
          },
          {
            title: "MODIFICATIONS AND SUSPENSION OF SERVICES",
            content: "SOFTURIX reserves the right to modify the structure, duration or materials of the courses offered, provided that such modifications do not substantially affect the user's learning objectives."
          },
          {
            title: "CONTACT",
            content: "For any questions, clarification or request related to this Refund Policy, the user can contact the email info@softurix.com or through the contact methods available on the softurix.com website."
          },
          {
            title: "ACCEPTANCE",
            content: "By making a purchase or registering on the Site, the user acknowledges having read, understood and expressly accepted the terms established in this Refund Policy."
          }
        ]
      },
      privacidad: {
        title: "Privacy Policy",
        subtitle: "HOFFI LEARNING S.A. DE C.V. (Softurix)",
        sections: [
          {
            title: "IDENTITY AND DOMICILE OF THE DATA CONTROLLER",
            content: "HOFFI LEARNING S.A. DE C.V. (hereinafter, “Softurix”), domiciled at Torcuato Tasso 245 Floor 4 Office 401, Col. Polanco V Section, Miguel Hidalgo, C.P. 11560, Mexico City is responsible for the processing, use and protection of the personal data it collects from its clients, users and visitors of its website softurix.com.\n\nFor any matter related to the processing of your personal data, you can contact the email info@softurix.com"
          },
          {
            title: "PERSONAL DATA COLLECTED",
            content: "Softurix may collect the following personal data directly or indirectly, when you:\n• Visit the website or use our contact forms.\n• Register to purchase online courses, workshops or diplomas.\n• Make payments through enabled platforms.\n• Request information or technical support.\n\nData collected:\n• Full name.\n• Email address.\n• Contact phone.\n• Fiscal domicile (if an invoice is required).\n• Billing data (RFC, company name).\n• Limited financial data (issuing bank and card type).\n\nSofturix does not store or directly process full credit or debit card data; processing is carried out through certified and secure payment gateways."
          },
          {
            title: "PURPOSES OF PROCESSING PERSONAL DATA",
            content: "The personal data collected will be used for the following primary purposes:\n• Register and manage your access to courses, workshops or diplomas offered by Softurix.\n• Manage payments, billing and issuance of digital tax receipts.\n• Provide technical support, customer service and academic follow-up.\n• Fulfill obligations derived from the contracting of services and courses.\n• Send notifications related to your account or contracted services.\n\nAnd for the following secondary purposes, which are not necessary for the provision of the service, but allow us to provide you with a better experience:\n• Send promotional information about new courses, discounts and events.\n• Evaluation of quality and service satisfaction.\n• Conduct surveys or market analysis.\n• Internal statistics and improvement of the user experience.\n\nIn case you do not want your data to be used for secondary purposes, you can state so by sending an email to info@softurix.com with the subject “Refusal of processing for secondary purposes”."
          },
          {
            title: "USE OF COOKIES AND SIMILAR TECHNOLOGIES",
            content: "Softurix uses cookies, web beacons and other tracking technologies to improve your experience on the website, analyze traffic and personalize content.\n\nCookies may collect information such as:\n• IP address.\n• Browser and device type.\n• Pages visited within the site.\n• Duration of the visit.\n\nYou can disable or delete cookies from your browser settings; however, doing so could affect some site functions."
          },
          {
            title: "TRANSFER OF PERSONAL DATA",
            content: "Softurix may share your personal data with national or foreign third parties in the following cases:\n• Tax or administrative authorities (when required by law).\n• Providers of web hosting, email or digital tools services, necessary for the operation of the site.\n\nIn all cases, the necessary security measures will be adopted to ensure that third parties process the data in accordance with the LFPDPPP and this Privacy Notice."
          },
          {
            title: "SECURITY MEASURES",
            content: "Softurix applies administrative, technical and physical security measures to guarantee the integrity, confidentiality and availability of personal data under its custody, preventing any damage, loss, alteration, destruction or unauthorized use, access or processing.\n\nThese measures are implemented in accordance with the principles and obligations established by the Federal Law on Protection of Personal Data Held by Private Parties and its Regulations, and include, without limitation, the following actions:\n\nAdministrative Measures\n• Establishment of internal privacy and confidentiality policies, applicable to all personnel involved in the processing of personal data.\n• Periodic training and awareness of personnel on the responsible handling of information and legal obligations derived from the processing of personal data.\n• Implementation of confidentiality agreements with employees, suppliers and third parties who have access to information.\n• Internal procedures for the management of security incidents, including notification, containment, analysis and corrective measures.\n\nTechnical Measures\n• Use of secure connections (SSL) throughout the website, ensuring the encrypted transmission of the information provided by users.\n• Encryption of passwords and sensitive data, applying internationally recognized encryption standards.\n• Electronic access control through authentication and unique credentials for internal systems handling personal data.\n• Periodic monitoring and audits to detect unauthorized access or system vulnerabilities.\n• Encrypted backups of essential information to prevent data loss or corruption.\n\nPhysical Measures\n• Restriction of physical access to the facilities and servers where personal data is stored, through entry controls and surveillance.\n• Secure storage of physical documents in closed spaces, with exclusive access to authorized personnel.\n• Implementation of backup measures and protection against incidents, such as fire detection systems, environmental control and regulated power for equipment hosting information.\n\nSupervision and Continuous Improvement\nSofturix maintains a process of continuous evaluation and improvement of its security measures, with periodic reviews that allow adapting them to technological advances, recommendations from competent authorities and the evolution of cyber threats.\n\nIn the event of a security incident that significantly affects the property or moral rights of the owners, Softurix will immediately notify the affected owner, according to the procedure provided by the LFPDPPP."
          },
          {
            title: "ARCO RIGHTS (ACCESS, RECTIFICATION, CANCELLATION AND OPPOSITION)",
            content: "You have the right to access your personal data, rectify them if they are incorrect, cancel them when you consider they are no longer necessary or oppose their processing for specific purposes.\n\nTo exercise your ARCO rights, you must send an email to info@softurix.com with the following information:\n• Full name and contact method.\n• Clear description of the request.\n• Documents verifying your identity or legal representation.\n\nThe corresponding area will attend your request within a maximum period of 20 business days from its receipt."
          },
          {
            title: "LIMITATION AND REVOCATION OF CONSENT",
            content: "At any time, you can revoke your consent for the processing of your personal data by sending your request to info@softurix.com, expressly indicating what use you wish to revoke.\n\nLikewise, you can limit the use or disclosure of your data by registering on the internal exclusion list of Softurix."
          },
          {
            title: "DATA RETENTION AND TERMS",
            content: "Personal data will be kept for the time necessary to fulfill the indicated purposes or while a contractual relationship exists.\n\nIn the case of users enrolled in courses or diplomas, the information will be kept for up to info@softurix.com after the course concludes, unless a legal provision requires another term."
          },
          {
            title: "CHANGES TO THE PRIVACY NOTICE",
            content: "Softurix reserves the right to modify or update this Privacy Notice to reflect legal, technical or commercial changes.\n\nModifications will be published at softurix.com/aviso-de-privacidad and will become effective upon publication."
          },
          {
            title: "ACCEPTANCE",
            content: "By using the website and/or purchasing any of the services offered by Softurix, you state that you have read, understood and accepted the terms of this Privacy Notice."
          }
        ]
      }
    },

  },
};