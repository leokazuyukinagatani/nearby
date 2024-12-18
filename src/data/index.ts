interface StepData {
    icon: string,
    title: string,
    description: string
};

export const steps: StepData[] = [
    {
        icon: "IconMapPin",
        title: "Encontre estabelecimentos",
        description: "Veja locais perto de você que são parceiros Nearby"
    },
    {
        icon: "IconQrcode",
        title: "Ative o cupom com QR Code",
        description: "Escanei o código no estabelecimento para usar o beneficio"
    },
    {
        icon: "IconTicket",
        title: "Garanta vantagens perto de você",
        description: "Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
    }
];

export const stepsTitle = "Veja como funciona:";