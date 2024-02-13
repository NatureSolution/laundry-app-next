export default function TestComponent () {
  return (
<div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8">Card Group</h1>
      
      {/* Large Screens - 3 Cards */}
      <div className="hidden lg:flex justify-center">
        <div className="card lg:w-1/4 bg-base-100 shadow-xl m-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum dolore non tempore nulla ea ut nesciunt quod facilis. Quae magnam, est eum dicta tenetur labore ipsa quasi mollitia repudiandae?</p>
        </div>
        <div className="card lg:w-1/4 bg-base-100 shadow-xl m-4">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dolore minima quam nesciunt quo adipisci labore, sunt quisquam cumque natus quae dignissimos delectus error harum corrupti ut ea quod reprehenderit!</p>
        </div>
        <div className="card lg:w-1/4 bg-base-100 shadow-xl m-4">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      
      {/* Tablets - 2 Cards */}
      <div className="hidden md:flex lg:hidden justify-center">
        <div className="card md:w-1/2 bg-base-100 shadow-xl m-4">
          {/* Card Content */}
        </div>
        <div className="card md:w-1/2 bg-base-100 shadow-xl m-4">
          {/* Card Content */}
        </div>
      </div>
      
      {/* Mobile - 1 Card */}
      <div className="flex md:hidden justify-center">
        <div className="card w-full bg-base-100 shadow-xl m-4">
          {/* Card Content */}
        </div>
      </div>
    </div>
  );
};

