import fetchContactData from "@/actions/fetchContactData";
import Button from "@/components/ui/Button";

const Contact = async () => {
  const contactData = await fetchContactData();

  return (
    <section
      id="contact"
      className="mx-auto max-w-prose min-h-96 py-28 items-center text-center gap-2"
    >
      <h2 className="text-lg text-primary font-mono">
        <span className="mr-2">05.</span>
        {contactData?.title}
      </h2>
      <h1 className="text-5xl font-extrabold mb-2">{contactData?.subTitle}</h1>
      <p className="tracking-wide mb-3">{contactData?.text}</p>
      <Button
        link={
          contactData?.buttonLink ||
          "mailto:piraharish.s@gmail.com?subject=Hello from your Website"
        }
        text={contactData?.buttonText || "Say Hello"}
      />
    </section>
  );
};

export default Contact;
