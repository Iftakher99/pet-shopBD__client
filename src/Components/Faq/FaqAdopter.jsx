const FaqAdopter = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the adoption process like?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The adoption process typically involves filling out an
                application, having a conversation with our staff, and meeting
                the pet you’re interested in. We want to ensure a good match
                between the pet and your home.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Are there any fees associated with adoption?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, there is an adoption fee that helps cover the costs of
                veterinary care, vaccinations, and other necessities for the
                pets. This fee varies depending on the pet's age and type.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What if I need to return my adopted pet?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                We understand that circumstances can change. If you need to
                return your adopted pet, please contact us as soon as possible.
                We will work with you to find a suitable solution.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I adopt a pet if I have other animals at home?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Yes, many of our pets can coexist with other animals. During the
                adoption process, we will ask about your current pets and may
                arrange a meet-and-greet to ensure everyone gets along.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What kind of support do you offer after adoption?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                We offer post-adoption support, including advice on pet care,
                behavior, and training. You can reach out to us at any time with
                questions or concerns about your new pet.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqAdopter;
