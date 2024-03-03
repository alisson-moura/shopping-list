import { Apple, Beef, CakeSlice, Carrot, Milk } from "lucide-react";

export enum AvailableTagNames {
    PADARIA = 'padaria',
    LEGUME = 'legume',
    FRUTA = 'fruta',
    BEBIDA = 'bebida',
    CARNE = 'carne'
}

interface TagPros {
    tagName: AvailableTagNames
}
export const StyleTags = {
    padaria: {
        bgColor: 'bg-yellow-dark',
        textColor: 'text-yellow',
        icon: <CakeSlice />,
        name: 'Padaria'
    },
    legume: {
        bgColor: 'bg-green-dark',
        textColor: 'text-green',
        icon: <Carrot />,
        name: 'Legume'
    },
    fruta: {
        bgColor: 'bg-orange-dark',
        textColor: 'text-orange',
        icon: <Apple />,
        name: 'Fruta'
    },
    bebida: {
        bgColor: 'bg-blue-dark',
        textColor: 'text-blue',
        icon: <Milk />,
        name: 'Bebida'
    },
    carne: {
        bgColor: 'bg-pink-dark',
        textColor: 'text-pink',
        icon: <Beef />,
        name: 'Carne'
    }
}

export function Tag({ tagName }: TagPros) {
    return (
        <div className={`px-4 py-2 gap-2 ${StyleTags[tagName].bgColor} ${StyleTags[tagName].textColor} flex items-center rounded-xl`}>
            {StyleTags[tagName].icon}
            <span>{StyleTags[tagName].name}</span>
        </div>
    )
}