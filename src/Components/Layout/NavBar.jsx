import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <Text className="text-white text-4xl">TRIO Design</Text>
        <Space size={"large"}>
          <Link className="text-white text-lg">Home</Link>
          <Link className="text-white text-lg">Products</Link>
          <Link className="text-white text-lg">Contact us</Link>
        </Space>
      </nav>
    </>
  );
}
