import Link from "next/link";
import icon1 from "../../../../public/icon/accelerate-svgrepo-com.svg";
import icon2 from "../../../../public/icon/trend-analysis-svgrepo-com.svg";
import icon3 from "../../../../public/icon/format-painter-svgrepo-com.svg";
import  icon4  from "../../../../public/icon/upload-svgrepo-com.svg";
import  icon5  from "../../../../public/icon/creativity-svgrepo-com.svg";
import  icon6  from "../../../../public/icon/set-up-svgrepo-com.svg";
import Image from "next/image";

const cards = [
    {
      id: 1,
      title: 'Invest any amount',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: {icon1},
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageUrl: {icon2},
    },
    {
      id: 3,
      title: 'Invest any amount',
      description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      imageUrl: {icon3},
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      imageUrl: {icon4},
    },
    {
      id: 5,
      title: 'Invest any amount',
      description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      imageUrl: {icon5},
    },
    {
      id: 4,
      title: 'Card 6',
      description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      imageUrl: {icon6},
    },
    // Add more cards as needed
  ];

  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

export default function PortfolioPage() {
    return (
        <div>
            <div>Now is the time to build your portfolio.
                With typical market returns, you have to start young to secure your future. With Pocket, it’s never too late to build your nest egg.</div>
            <div>
            <div className="flex flex-wrap -mx-4">
      {cards.map((card) => (
        <div key={card.id} className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* <img src={icon1} alt={card.title} className="w-80 h-80 object-cover" /> */}
            <Image src={icon2} alt="Picture of the author" width="40" height="40" placeholder="empty" />
            <div className="p-7">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600">{truncateDescription(card.description, 50)}</p>
              <Link href={`/services/${card.id}`}>
              <button className="btn btn-sm btn-outline btn-warning">Detail</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
        </div>
    )
}