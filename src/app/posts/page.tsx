export default function PostsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">我的文章</h1>
      <p className="text-gray-600">内容正在更新中...</p>
      <a href="/" className="mt-8 text-blue-500 hover:underline">返回首页</a>
    </div>
  );
}