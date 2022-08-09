import Image from 'next/image'
import { Card, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { capitalizedName } from '../../utils';

export const PokeCard = ({pokemon}) => {

  const { name, id, image } = pokemon;
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`);
  }

    return (
        <Card isHoverable variant="bordered" css={{ mw: "400px", cursor: 'pointer' }}>
        <Card.Body onClick={onClick}>
          <Text h1
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">

            {capitalizedName(name)}
          </Text>
          <Image
            src={`${image}`}
            alt={name}
            width={500}
            height={500}
          />
        </Card.Body>
      </Card>
    )
}
