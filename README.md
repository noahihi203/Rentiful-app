# Nền Tảng Quản Lý Bất Động Sản Cho Thuê

## Tổng Quan Dự Án

Dự án này là một nền tảng quản lý bất động sản toàn diện, kết nối chủ nhà/người quản lý với người thuê. Nền tảng số hóa toàn bộ quy trình từ tìm kiếm, đăng ký, quản lý hợp đồng đến thanh toán tiền thuê nhà, giúp quản lý bất động sản cho thuê hiệu quả hơn.

## Tính Năng

- **Tìm Kiếm Bất Động Sản Nâng Cao**: Tìm kiếm theo khu vực, giá cả, số phòng ngủ, phòng tắm và nhiều tiêu chí khác
- **Quản Lý Người Dùng**: Hỗ trợ cả hai loại người dùng là người thuê và chủ nhà/người quản lý
- **Quản Lý Đơn Đăng Ký & Hợp Đồng**: Đăng ký tài sản và quản lý hợp đồng trực tuyến
- **Theo Dõi Thanh Toán**: Theo dõi và quản lý các khoản thanh toán tiền thuê
- **Tích Hợp Bản Đồ**: Tìm kiếm bất động sản dựa trên vị trí địa lý
- **Chức Năng Yêu Thích**: Người dùng có thể lưu các bất động sản họ thích

## Công Nghệ Sử Dụng

### Frontend (Client)

- **Next.js**: Framework dựa trên React
- **TypeScript**: Phát triển với type an toàn
- **Tailwind CSS**: Thiết kế UI hiện đại
- **Redux Toolkit**: Quản lý state
- **Framer Motion**: Hiệu ứng chuyển động
- **Mapbox API**: Tích hợp bản đồ

### Backend (Server)

- **Node.js**: Môi trường server-side
- **Express**: Framework Web API
- **Prisma**: ORM cho database
- **PostgreSQL**: Cơ sở dữ liệu quan hệ
- **PostGIS**: Mở rộng dữ liệu không gian địa lý

## Cấu Trúc Dự Án

```
client/             # Ứng dụng frontend
  src/              # Mã nguồn
    app/            # Next.js App Router
    components/     # Các component có thể tái sử dụng
    hooks/          # Custom React hooks
    lib/            # Các hàm tiện ích
    state/          # Quản lý state với Redux
    types/          # Định nghĩa TypeScript

server/             # Ứng dụng backend
  prisma/           # Schema Prisma và migrations
  src/              # Mã nguồn
    controllers/    # Các controller API
    middleware/     # Middleware
    routes/         # Định nghĩa route API
```

## Cài Đặt Môi Trường Phát Triển

### Yêu Cầu

- Node.js (v18 trở lên)
- PostgreSQL (v14 trở lên)
- Phần mở rộng PostGIS

### Cài Đặt Client

```bash
# Di chuyển đến thư mục client
cd client

# Cài đặt các dependencies
npm install

# Khởi động server phát triển
npm run dev
```

### Cài Đặt Server

```bash
# Di chuyển đến thư mục server
cd server

# Cài đặt các dependencies
npm install

# Tạo file .env (cấu hình biến môi trường)
# DATABASE_URL="postgresql://user:password@localhost:5432/rental_db?schema=public"

# Chạy migration database
npx prisma migrate dev

# Khởi động server phát triển
npm run dev
```

## Triển Khai

### Client (Next.js)

- Khuyến nghị triển khai trên Vercel
- Các lựa chọn khác: Netlify, AWS Amplify

### Server (Node.js/Express)

- AWS EC2, Heroku, Google Cloud Run,...

## Điểm Nổi Bật

1. **Thiết Kế UI/UX Hiện Đại**: Hiệu ứng chuyển động và tương tác trực quan
2. **Tìm Kiếm Tích Hợp Bản Đồ**: Trải nghiệm tìm kiếm bất động sản trực quan
3. **Bộ Lọc Tìm Kiếm Đa Dạng**: Cho phép thiết lập điều kiện tìm kiếm chi tiết
4. **Thiết Kế Responsive**: Tương thích với mọi thiết bị
5. **Cập Nhật Dữ Liệu Thời Gian Thực**: Hiển thị thông tin bất động sản mới nhất
6. **Hệ Thống Xác Thực An Toàn**: Quản lý người dùng bảo mật
7. **Tận Dụng Dữ Liệu Không Gian Địa Lý**: Xử lý thông tin vị trí hiệu quả

## Giấy Phép

MIT

---

© 2025 Nền Tảng Quản Lý Bất Động Sản Cho Thuê
