const Faq = () => {
  const faqs = [
    {
      question: "What is M-Flix?",
      answer:
        "M-Flix is a platform where you can explore a wide variety of movies, from classics to the latest releases, and manage your personal watchlist.",
    },
    {
      question: "How do I subscribe to M-Flix?",
      answer:
        "To subscribe, simply create an account, log in, and choose your subscription plan from the profile section.",
    },
    {
      question: "Can I download movies to watch offline?",
      answer:
        "Currently, M-Flix doesn't support offline downloads. However, you can stream movies anytime with an active subscription.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, M-Flix offers a 7-day free trial for new users. After the trial period, you can choose a subscription plan to continue enjoying the service.",
    },
    {
      question: "What devices are supported?",
      answer:
        "M-Flix works on a variety of devices including smartphones, tablets, laptops, smart TVs, and gaming consoles with a compatible browser or app.",
    },
  ];

  return (
  <div className="bg-purple-100 py-10 dark:bg-[#111827]">
      <div className="w-11/12 mx-auto my-8">
      <h2 className="text-3xl font-bold  mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium dark:text-white">
              {faq.question}
            </div>
            <div className="collapse-content dark:text-gray-300">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Faq;
