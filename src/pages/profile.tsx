import { Layout, Row, Col } from "antd";
import { Link } from "react-router";
import { useAuthStore } from "../store/user.store";
import { LogoutButton } from "../components/molecules/logout-button";

const style =
  "border border-zinc-500 px-4 py-2 text-zinc-600 rounded-md hover:text-zinc-800 transition duration-200 ease-in-out";

export const Profile = () => {
  const { user } = useAuthStore.getState();

  return (
    <Layout style={{ padding: "20px" }}>
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Col span={24}>
          <div className="text-center text-4xl font-bold">
            <span className="text-zinc-600">{user?.username}</span>'s Profile
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} sm={18} md={16} lg={12} xl={8} id="user-info" style={{ padding: "0 20px" }}>
          {user?.avatar ? (
            <div className="user-avatar flex items-center my-3 gap-5">
              <p style={{ minWidth: "120px", textAlign: "right" }}>Avatar :</p>
              <span className={style}>
                <img
                  src={user.avatar}
                  alt={`${user.username}'s avatar`}
                  style={{ maxWidth: "100px", borderRadius: "50%" }}
                />
              </span>
            </div>
          ) : (
            <Link to={"/settings"}>
              <p className="text-sm text-red-600 underline mt-5">
                Please upload an image for avatar
              </p>
            </Link>
          )}

          <div className="user-email flex items-center my-3 gap-5">
            <p style={{ minWidth: "120px", textAlign: "right" }}>Email Address :</p>
            <span className={style}>{user?.email}</span>
          </div>

          <div className="user-userRole flex items-center my-3 gap-5">
            <p style={{ minWidth: "120px", textAlign: "right" }}>Role :</p>
            <span className={style}>{user?.userRole}</span>
          </div>

          <div className="user-username flex items-center my-3 gap-5">
            <p style={{ minWidth: "120px", textAlign: "right" }}>Username :</p>
            <span className={style}>{user?.username}</span>
          </div>

          <div className="div">
            <LogoutButton />
          </div>
        </Col>
      </Row>
    </Layout>
  );
};