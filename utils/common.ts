export const randomTextColor = () => {
    let tailwindTextColors = [
       "text-red-500",
       "text-yellow-500",
       "text-green-500",
       "text-emerald-500",
       "text-teal-500",
       "text-sky-500",
       "text-blue-500"     
    ];
    return tailwindTextColors[Math.floor(Math.random() * tailwindTextColors.length)];
};