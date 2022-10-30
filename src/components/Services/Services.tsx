import { Text, Title } from '@components/Texts';

export const Services: React.FC = () => {
  return (
    <section className="container mx-auto flex justify-between mt-40">
      <div className="flex flex-col w-fit">
        <Title variant="h2" className="mb-8 whitespace-pre">
          Serviços GMC
        </Title>
        <Title variant="h2">Serviços UFV</Title>
      </div>
      <Text variant="p2" className="max-w-4xl ml-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tempor
        aliquet quis feugiat ac at. Scelerisque lectus phasellus dignissim nec
        accumsan. Mi tincidunt aenean tristique metus venenatis ac, volutpat.
        Dictum ultrices lacus at hac nibh bibendum at elit. Nisl, amet congue
        lectus a, a. Diam, mattis imperdiet pellentesque euismod mattis. Blandit
        congue nullam nisl, sed. Egestas ultricies mollis augue cum. Lacus
        facilisis lorem morbi pharetra tristique sit eget tortor pulvinar.
        Condimentum volutpat, volutpat dui habitant. Fermentum facilisis enim
        nunc placerat est cras eget mi. Proin odio amet, aliquet elementum.
        Elementum mi ultrices dui sagittis convallis.
      </Text>
    </section>
  );
};
