"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Play, ChevronDown, Eye, Phone, ChevronRight, Zap } from "lucide-react";

const packageFilters = ["Tất cả", "Gói Chuyên Nghiệp", "Gói Cao Cấp"];

const colors = [
  "from-pink-500 to-rose-600",
  "from-purple-500 to-indigo-600",
  "from-blue-500 to-cyan-500",
  "from-orange-400 to-pink-500",
  "from-teal-400 to-emerald-500",
  "from-amber-400 to-orange-500",
  "from-violet-500 to-purple-600",
  "from-red-400 to-pink-600",
];

const portfolioVideos = [
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775265200/cjk2zm54tiu8g1qekbo3.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775265173/wzdmbzpmvjsftgskingc.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775265109/dzegwkkj4g3ivyuzc9ch.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264958/ftysptquwv243a4qnic7.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264927/axsmxmdbckgagg86noew.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264874/luskhhyxpnqeqhttltja.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264873/wmfo3g7ddvd6w0mlyxio.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264867/qpbhlpz6pgtjbsypmops.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264856/u454qksvvqrdsdrmui9x.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264842/w5odbvh9afeqwc1xf4zd.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264837/ryz84coflfdfzwmh8ylf.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264824/htc7bxbofmvk9pgzzcke.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264810/f9zv62lobw2uuczbeomx.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264807/wzmj8upcim0itwpqmjgx.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264804/uofjmas5wyywwqkpom5s.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264801/sxgthza8en8jeiewqsf1.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264798/bxktzgrg7xs9cvdg2rql.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264785/o0zwlyhzpeswjzwou70j.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264778/mqgks9pzofrd4w8k6req.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264774/pao3ko0cayjmifmxihrv.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775264754/h7zr9zu9amegg0vdkro5.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569232/ny9whcrrmikrshd9uwjb.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569323/huphfbgefuytv2ctwggi.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569407/ypb8azc5btrdvzqykcyx.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569465/zu6gvusf6smlo1znfxuo.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569492/ssmutdjta1ax1pvjpvfu.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569593/qedqgxig1mv64feiuaj7.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569614/ksvjzjlmd7fxhvsxnu8h.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569664/ykkvdvirnm1v00xsc0vw.mp4",
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569747/ifnpan3xwnijx6jro7ns.mp4",
];

const premiumPortfolioProjects = [
  { id: 31, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "3.2M", handle: "@shortpro.vn", colorIdx: 0, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775629837/mynbbvk8nugbpofqdnfn.mp4" },
  { id: 32, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "3.4M", handle: "@shortpro.vn", colorIdx: 1, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775629838/kw7lvj26pwlp6fwwvei3.mp4" },
  { id: 33, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "3.7M", handle: "@shortpro.vn", colorIdx: 2, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630332/c15hpglhnuizhofmqxsj.mp4" },
  { id: 34, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "3.9M", handle: "@shortpro.vn", colorIdx: 3, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630332/iejacm8gltg33iqufulz.mp4" },
  { id: 35, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "4.1M", handle: "@shortpro.vn", colorIdx: 4, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630337/yo3ggxfikhyqgumfrmr3.mp4" },
  { id: 36, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "4.3M", handle: "@shortpro.vn", colorIdx: 5, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630338/e2au6jgmpehtonbzgm7i.mp4" },
  { id: 37, title: "Beauty", category: "Thời trang", packageType: "Gói Cao Cấp", views: "4.5M", handle: "@shortpro.vn", colorIdx: 6, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630341/jdyqna66y6yf20yexmny.mp4" },
  { id: 38, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "2.8M", handle: "@shortpro.vn", colorIdx: 7, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630180/a4v72tnecdz9anyshbb4.mp4" },
  { id: 39, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "3.1M", handle: "@shortpro.vn", colorIdx: 0, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630190/aifou9jjfxn0orczg1q2.mp4" },
  { id: 40, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "3.3M", handle: "@shortpro.vn", colorIdx: 1, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630188/un1u3d5k0rylyjgp5hxe.mp4" },
  { id: 41, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "3.6M", handle: "@shortpro.vn", colorIdx: 2, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630194/nhndife8fgvrvbyveqnl.mp4" },
  { id: 42, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "3.8M", handle: "@shortpro.vn", colorIdx: 3, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630197/bkhz0sa9apqdn6cw3bmb.mp4" },
  { id: 43, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "4.0M", handle: "@shortpro.vn", colorIdx: 4, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630198/dscsylkknxw5phow3gyr.mp4" },
  { id: 44, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "4.2M", handle: "@shortpro.vn", colorIdx: 5, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630198/azacqv1ep4l5gskc5c7t.mp4" },
  { id: 45, title: "Story Telling", category: "F&B", packageType: "Gói Cao Cấp", views: "4.4M", handle: "@shortpro.vn", colorIdx: 6, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630201/ilrablxcog4wca6hggux.mp4" },
] as const;

const professionalPortfolioProjects = [
  { id: 46, title: "Vlog - Review", category: "Garage auto", packageType: "Gói Chuyên Nghiệp", views: "2.4M", handle: "@shortpro.vn", colorIdx: 7, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630858/mrcs5wlvgls8pcxqosch.mp4" },
  { id: 47, title: "Vlog - Review", category: "Garage auto", packageType: "Gói Chuyên Nghiệp", views: "2.6M", handle: "@shortpro.vn", colorIdx: 0, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630895/ldwv7o3xbaemp5l5kduw.mp4" },
  { id: 48, title: "Vlog - Review", category: "F&B", packageType: "Gói Chuyên Nghiệp", views: "2.9M", handle: "@shortpro.vn", colorIdx: 1, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630899/lwlszejesti1uvygbmla.mp4" },
  { id: 49, title: "Vlog - Review", category: "F&B", packageType: "Gói Chuyên Nghiệp", views: "3.1M", handle: "@shortpro.vn", colorIdx: 2, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630875/aohylzqjxpvjnsqt8sdh.mp4" },
  { id: 50, title: "Hướng dẫn", category: "Sản phẩm", packageType: "Gói Chuyên Nghiệp", views: "2.7M", handle: "@shortpro.vn", colorIdx: 3, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630882/p9dgvrqlx5jjqndfudga.mp4" },
  { id: 51, title: "Hướng dẫn", category: "Sản phẩm", packageType: "Gói Chuyên Nghiệp", views: "2.8M", handle: "@shortpro.vn", colorIdx: 4, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630872/ck1lhiwjyt0mshkycxnv.mp4" },
  { id: 52, title: "Hướng dẫn", category: "Sản phẩm", packageType: "Gói Chuyên Nghiệp", views: "3.0M", handle: "@shortpro.vn", colorIdx: 5, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775630867/ywuwufoafvpjp08l0eoo.mp4" },
  { id: 53, title: "Bán hàng", category: "Thiết bị vệ sinh", packageType: "Gói Chuyên Nghiệp", views: "3.4M", handle: "@shortpro.vn", colorIdx: 6, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775631418/iivepawwj7asnib1acl0.mp4" },
  { id: 54, title: "Bán hàng", category: "Thiết bị vệ sinh", packageType: "Gói Chuyên Nghiệp", views: "3.6M", handle: "@shortpro.vn", colorIdx: 7, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775631417/i3aklp1kha1ozepr9721.mp4" },
  { id: 55, title: "Bán hàng", category: "Thiết bị vệ sinh", packageType: "Gói Chuyên Nghiệp", views: "3.8M", handle: "@shortpro.vn", colorIdx: 0, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775631417/wff3klzdl7rw7cgn1gv4.mp4" },
  { id: 56, title: "Bán hàng", category: "Thiết bị vệ sinh", packageType: "Gói Chuyên Nghiệp", views: "4.0M", handle: "@shortpro.vn", colorIdx: 1, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775631416/urkdxunizdcdnp2q7rpu.mp4" },
  { id: 57, title: "Chuyên gia", category: "Bất động sản", packageType: "Gói Chuyên Nghiệp", views: "4.2M", handle: "@shortpro.vn", colorIdx: 2, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775631677/fpfebij0tcvyop5mjk1t.mp4" },
  { id: 58, title: "Chuyên gia", category: "Bất động sản", packageType: "Gói Chuyên Nghiệp", views: "4.4M", handle: "@shortpro.vn", colorIdx: 3, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775631637/g3lixilpj9cth5jwamx1.mp4" },
  { id: 59, title: "Beauty", category: "Phụ kiện thời trang", packageType: "Gói Chuyên Nghiệp", views: "3.5M", handle: "@shortpro.vn", colorIdx: 4, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775632563/boj5zu7tr9ntqmlvgc57.mp4" },
  { id: 60, title: "Beauty", category: "Phụ kiện thời trang", packageType: "Gói Chuyên Nghiệp", views: "3.7M", handle: "@shortpro.vn", colorIdx: 5, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775632564/kfc2z9jhouvie7b4rwfc.mp4" },
  { id: 61, title: "Beauty", category: "Phụ kiện thời trang", packageType: "Gói Chuyên Nghiệp", views: "3.9M", handle: "@shortpro.vn", colorIdx: 6, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775632571/s1mis3ln8acs2eu69tu6.mp4" },
  { id: 62, title: "Beauty", category: "Phụ kiện thời trang", packageType: "Gói Chuyên Nghiệp", views: "4.1M", handle: "@shortpro.vn", colorIdx: 7, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775632574/gajlzusv2skjehjphw9y.mp4" },
  { id: 63, title: "Beauty", category: "Phụ kiện thời trang", packageType: "Gói Chuyên Nghiệp", views: "4.3M", handle: "@shortpro.vn", colorIdx: 0, videoSrc: "https://res.cloudinary.com/djpujlimr/video/upload/v1775632577/kfqbkwobc1gqozpqnjba.mp4" },
] as const;

interface Project {
  id: number;
  title: string;
  category: string;
  packageType: string;
  views: string;
  handle: string;
  colorIdx: number;
  videoSrc: string;
}

const allProjects: Project[] = [
  ...professionalPortfolioProjects,
  ...premiumPortfolioProjects,
  { id: 19, title: "Review menu quán mới", category: "F&B", packageType: "Gói Chuyên Nghiệp", views: "2.7M", handle: "@foodreviewvn", colorIdx: 2, videoSrc: portfolioVideos[21] },
  { id: 20, title: "Spa treatment thực tế", category: "Spa - Thẩm Mỹ", packageType: "Gói Cao Cấp", views: "3.1M", handle: "@glowspacare", colorIdx: 3, videoSrc: portfolioVideos[22] },
  { id: 21, title: "Review căn hộ bàn giao", category: "Bất động sản", packageType: "Gói Cao Cấp", views: "4.6M", handle: "@urbanhomevn", colorIdx: 4, videoSrc: portfolioVideos[23] },
  { id: 22, title: "Mix đồ outfit mùa hè", category: "Thời trang", packageType: "Gói Chuyên Nghiệp", views: "3.9M", handle: "@closet.daily", colorIdx: 5, videoSrc: portfolioVideos[24] },
  { id: 23, title: "Test máy quay thực chiến", category: "Thiết bị", packageType: "Gói Cao Cấp", views: "2.2M", handle: "@gearhub.vn", colorIdx: 6, videoSrc: portfolioVideos[25] },
  { id: 24, title: "Case niềng răng thực tế", category: "Nha khoa", packageType: "Gói Chuyên Nghiệp", views: "2.9M", handle: "@dentalsmile.vn", colorIdx: 7, videoSrc: portfolioVideos[26] },
  { id: 25, title: "Routine skincare ban đêm", category: "Beauty", packageType: "Gói Cao Cấp", views: "4.4M", handle: "@beautylab.vn", colorIdx: 0, videoSrc: portfolioVideos[27] },
  { id: 26, title: "Kịch bản chốt đơn ngắn", category: "Bán hàng", packageType: "Gói Chuyên Nghiệp", views: "5.1M", handle: "@salesboost.vn", colorIdx: 1, videoSrc: portfolioVideos[28] },
  { id: 27, title: "Chuyên gia chia sẻ nhanh", category: "Chuyên gia", packageType: "Gói Cao Cấp", views: "3.3M", handle: "@expert.corner", colorIdx: 2, videoSrc: portfolioVideos[29] },
  { id: 1, title: "Review nhà hàng Hải Sản", category: "F&B", packageType: "Gói Cao Cấp", views: "2.5M", handle: "@haisandaiduong", colorIdx: 0, videoSrc: portfolioVideos[0] },
  { id: 2, title: "Spa trải nghiệm chăm sóc da", category: "Spa - Thẩm Mỹ", packageType: "Gói Cao Cấp", views: "1.8M", handle: "@bellaspa.vn", colorIdx: 1, videoSrc: portfolioVideos[1] },
  { id: 3, title: "Tour thực tế căn hộ", category: "Bất động sản", packageType: "Gói Chuyên Nghiệp", views: "3.2M", handle: "@goldenland", colorIdx: 2, videoSrc: portfolioVideos[2] },
  { id: 4, title: "Lookbook thời trang hè", category: "Thời trang", packageType: "Gói Cao Cấp", views: "4.1M", handle: "@moly.fashion", colorIdx: 3, videoSrc: portfolioVideos[3] },
  { id: 5, title: "Unbox máy ảnh Sony A7", category: "Thiết bị", packageType: "Gói Chuyên Nghiệp", views: "1.5M", handle: "@techzone.vn", colorIdx: 4, videoSrc: portfolioVideos[4] },
  { id: 6, title: "Tẩy trắng răng tại nha khoa", category: "Nha khoa", packageType: "Gói Chuyên Nghiệp", views: "2.1M", handle: "@nhakhoasmile", colorIdx: 5, videoSrc: portfolioVideos[5] },
  { id: 7, title: "Routine skincare buổi sáng", category: "Beauty", packageType: "Gói Cao Cấp", views: "5.7M", handle: "@beautybox.vn", colorIdx: 6, videoSrc: portfolioVideos[6] },
  { id: 8, title: "Review quán cafe mới mở", category: "Vlog - Review", packageType: "Gói Chuyên Nghiệp", views: "3.4M", handle: "@foodhunter", colorIdx: 7, videoSrc: portfolioVideos[7] },
  { id: 9, title: "Hướng dẫn chụp ảnh đẹp", category: "Hướng dẫn", packageType: "Gói Chuyên Nghiệp", views: "1.9M", handle: "@phototips", colorIdx: 0, videoSrc: portfolioVideos[8] },
  { id: 10, title: "Livestream bán hàng mỹ phẩm", category: "Bán hàng", packageType: "Gói Cao Cấp", views: "6.2M", handle: "@shopbeauty", colorIdx: 1, videoSrc: portfolioVideos[9] },
  { id: 11, title: "Bác sĩ tư vấn sức khỏe", category: "Chuyên gia", packageType: "Gói Cao Cấp", views: "4.8M", handle: "@drnguyen", colorIdx: 2, videoSrc: portfolioVideos[10] },
  { id: 12, title: "Trà sữa viral trend", category: "F&B", packageType: "Gói Chuyên Nghiệp", views: "7.1M", handle: "@bobatime", colorIdx: 3, videoSrc: portfolioVideos[11] },
  { id: 13, title: "Massage body thư giãn", category: "Spa - Thẩm Mỹ", packageType: "Gói Chuyên Nghiệp", views: "2.3M", handle: "@spavip", colorIdx: 4, videoSrc: portfolioVideos[12] },
  { id: 14, title: "Penthouse view triệu đô", category: "Bất động sản", packageType: "Gói Cao Cấp", views: "5.5M", handle: "@luxuryhome", colorIdx: 5, videoSrc: portfolioVideos[13] },
  { id: 15, title: "OOTD công sở", category: "Thời trang", packageType: "Gói Chuyên Nghiệp", views: "2.8M", handle: "@officestyle", colorIdx: 6, videoSrc: portfolioVideos[14] },
  { id: 16, title: "Review son môi top seller", category: "Beauty", packageType: "Gói Chuyên Nghiệp", views: "4.3M", handle: "@lipqueen", colorIdx: 7, videoSrc: portfolioVideos[15] },
  { id: 17, title: "Đồ ăn đường phố Sài Gòn", category: "Vlog - Review", packageType: "Gói Cao Cấp", views: "8.9M", handle: "@saigonfood", colorIdx: 0, videoSrc: portfolioVideos[16] },
  { id: 18, title: "Tutorial makeup tự nhiên", category: "Hướng dẫn", packageType: "Gói Cao Cấp", views: "3.7M", handle: "@makeuptips", colorIdx: 1, videoSrc: portfolioVideos[17] },
  { id: 28, title: "Review quán ăn đêm", category: "Vlog - Review", packageType: "Gói Chuyên Nghiệp", views: "2.6M", handle: "@nightfoodvn", colorIdx: 3, videoSrc: portfolioVideos[18] },
  { id: 29, title: "Hướng dẫn set up studio", category: "Hướng dẫn", packageType: "Gói Cao Cấp", views: "3.5M", handle: "@creator.setup", colorIdx: 4, videoSrc: portfolioVideos[19] },
  { id: 30, title: "Review món hot trending", category: "F&B", packageType: "Gói Cao Cấp", views: "6.4M", handle: "@foodtrend.vn", colorIdx: 5, videoSrc: portfolioVideos[20] },
];

export default function PortfolioPage() {
  const [selectedPackage, setSelectedPackage] = useState("Tất cả");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [showMoreCats, setShowMoreCats] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const categoryFilters = useMemo(
    () => ["Tất cả", ...Array.from(new Set(allProjects.map((project) => project.category)))],
    []
  );

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const pkgMatch = selectedPackage === "Tất cả" || p.packageType === selectedPackage;
      const catMatch = selectedCategory === "Tất cả" || p.category === selectedCategory;
      return pkgMatch && catMatch;
    });
  }, [selectedPackage, selectedCategory]);

  const visibleProjects = filtered.slice(0, visibleCount);
  const displayedCats = showMoreCats ? categoryFilters : categoryFilters.slice(0, 7);

  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="page-hero-bg absolute inset-0" />
        <div className="absolute top-10 left-20 w-64 h-64 bg-pink-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-brand/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-brand/10 border border-pink-brand/20 text-pink-brand text-sm font-medium mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Dự Án <span className="gradient-text">Tiêu Biểu</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Các dự án video đã triển khai theo từng gói dịch vụ
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="page-filter-bar py-8 sticky top-16 md:top-20 z-40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Package Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {packageFilters.map((f) => (
              <button
                key={f}
                onClick={() => { setSelectedPackage(f); setVisibleCount(8); }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedPackage === f
                    ? "gradient-bg text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-center">
            {displayedCats.map((f) => (
              <button
                key={f}
                onClick={() => { setSelectedCategory(f); setVisibleCount(8); }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === f
                    ? "bg-pink-brand/20 text-pink-brand border border-pink-brand/30"
                    : "bg-white/[0.03] text-gray-500 hover:text-gray-300 border border-white/5"
                }`}
              >
                {f}
              </button>
            ))}
            {!showMoreCats && (
              <button
                onClick={() => setShowMoreCats(true)}
                className="px-4 py-2 rounded-full text-xs font-medium text-pink-brand hover:bg-pink-brand/10 transition-all flex items-center gap-1 hover:cursor-pointer"
              >
                Xem thêm <ChevronDown size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visibleProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Chưa có dự án nào trong danh mục này</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {visibleProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-pink-brand/30 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                    >
                      <div className={`aspect-[9/16] bg-gradient-to-br ${colors[project.colorIdx]} relative overflow-hidden`}>
                        {project.videoSrc ? (
                          <video
                            className="absolute inset-0 h-full w-full object-cover"
                            src={project.videoSrc}
                            muted
                            controls
                            playsInline
                            preload="metadata"
                          />
                        ) : null}
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.02)_45%,rgba(0,0,0,0.18)_100%)]" />
                      {/* Category tag */}
                      <div className="pointer-events-none absolute top-3 left-3">
                        <span className="rounded-full bg-[#08152f]/88 px-3 py-1 text-xs font-medium text-[#F2E3BA] backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom info */}
                      <div className="pointer-events-none absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-white">
                            {project.title[0]}
                          </div>
                          <div className="min-w-0">
                            <p className="text-white text-xs font-semibold truncate [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">{project.title}</p>
                            <p className="text-white/80 text-xs [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">{project.handle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className="text-gray-500" />
                        <span className="text-gray-400 text-xs">{project.views}</span>
                      </div>
                      <span className="text-gray-600 text-xs">{project.packageType.replace("Gói ", "")}</span>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((v) => v + 12)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold transition-all hover:cursor-pointer hover:bg-white/5"
                  >
                    Xem thêm dự án
                    <ChevronDown size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-24">
        <div className="cta-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="cta-card relative overflow-hidden rounded-[40px] px-5 py-12 text-center sm:px-8 sm:py-14">
            <div className="cta-background absolute inset-0 bg-[radial-gradient(circle_at_18%_68%,rgba(212,174,104,0.12),transparent_24%),radial-gradient(circle_at_84%_34%,rgba(212,174,104,0.14),transparent_24%)]" />
            <div className="cta-content relative z-10">
              <div className="cta-badge-wrap mb-6 flex justify-center">
                <span className="cta-badge inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-5 py-2.5 text-base font-semibold text-[#C9A163]">
                  <Zap className="cta-badge-icon h-4 w-4" />
                  <span className="cta-badge-text">Bắt đầu ngay</span>
                </span>
              </div>
              <h2 className="cta-title mx-auto mb-6 max-w-3xl text-3xl font-black leading-[1.08] text-[#08152f] sm:text-4xl lg:text-5xl">
                Bạn muốn video như thế này?
              </h2>
              <p className="cta-description mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#6b7280] sm:text-xl sm:leading-[1.5]">
                Hãy để chúng tôi tạo nên những video ấn tượng cho thương hiệu của bạn.
              </p>
              <div className="cta-actions mb-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="cta-primary-button inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] px-8 py-4 text-lg font-bold text-[#08152f] shadow-[0_12px_28px_rgba(201,161,99,0.26)] transition-all hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(201,161,99,0.32)] hover:brightness-[1.03]">
                  <span className="cta-primary-button-text">Nhận tư vấn</span>
                  <ChevronRight className="cta-primary-button-icon h-5 w-5" />
                </Link>
                <Link href="/pricing" className="cta-secondary-button inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-[#d7dce5] bg-white px-8 py-4 text-lg font-bold text-[#08152f] transition-all hover:cursor-pointer hover:bg-[#f7f9fc]">
                  <span className="cta-secondary-button-text">Xem báo giá</span>
                </Link>
              </div>
              <div className="cta-contacts flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[#6b7280]">
                <div className="cta-contact-item inline-flex items-center gap-3 text-base sm:text-lg">
                  <Phone className="cta-contact-icon h-5 w-5" />
                  <span className="cta-contact-text">0906 914 696</span>
                </div>
                <div className="cta-contact-item inline-flex items-center gap-3 text-base sm:text-lg">
                  <Phone className="cta-contact-icon h-5 w-5" />
                  <span className="cta-contact-text">0935 357 656</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
