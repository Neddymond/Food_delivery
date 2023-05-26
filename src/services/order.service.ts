import amqp, { Message } from 'amqplib/callback_api';

const createMQConsumer = (amqpURl: string) => {
  console.log('Connecting to RabbitMQ...');
  return () => {
    amqp.connect(amqpURl, (errConn, conn) => {
      if (errConn) {
        throw errConn;
      }

      conn.createChannel((errChan, chan) => {
        if (errChan) {
          throw errChan;
        }

        const queueName = 'orders';
        console.log('Connected to RabbitMQ');
        chan.assertQueue(queueName, { durable: true });
        chan.consume(
          queueName,
          (msg: Message | null) => {
            if (msg) {
              const parsed = JSON.parse(msg.content.toString());
              switch (parsed.action) {
                case 'order_created':
                  console.log('A new order has been created');
                  break;
                default:
                  break;
              }
            }
          },
          { noAck: true },
        );
      });
    });
  };
};

export default createMQConsumer;
