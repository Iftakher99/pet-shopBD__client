const FaqRehomer = () => {
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
              What is the rehoming process?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The rehoming process involves filling out a rehoming application
                form and providing details about your pet's personality, health,
                and any special needs. Our team will review your submission and
                assist you in finding a suitable home for your pet.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Are there any fees for rehoming my pet?
            </summary>
            <div className="px-4 pb-4">
              <p>
                There are generally no fees to rehome your pet through our
                organization. However, we may request a donation to help cover
                the costs of care for the animals we assist.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What information should I provide about my pet?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                We recommend providing detailed information about your pet's
                health, temperament, dietary needs, and any behavioral quirks.
                This helps potential adopters understand your pet better and
                ensures a good match.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I meet potential adopters before finalizing the rehoming?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Yes, we encourage meetings between you and potential adopters.
                This can help you assess whether they would be a good fit for
                your pet and allow them to interact with your pet before making
                a commitment.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What if I can't find a home for my pet?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                If you are unable to find a suitable home for your pet, please
                reach out to us. We may be able to assist you with resources or
                arrange for temporary care while you continue your search.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqRehomer;
