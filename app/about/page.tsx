import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            We are a modern company dedicated to creating beautiful and functional websites. Our team of experts is passionate about delivering high-quality solutions that meet our clients' needs.
          </p>
          <p className="mb-4">
            With years of experience in web development and design, we strive to stay at the forefront of technology trends to provide cutting-edge solutions for businesses of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="https://images.unsplash.com/photo-1721332153289-0c46dc38981b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MXwxfGFsbHwxfHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400" alt="Web Development" width={300} height={300} className="rounded-lg" />
          <Image src="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHwyfHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400" alt="Web Design" width={300} height={300} className="rounded-lg" />
          <Image src="https://images.unsplash.com/photo-1726491703674-018f676fa96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHwzfHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400" alt="Our Team" width={300} height={300} className="rounded-lg" />
          <Image src="https://images.unsplash.com/photo-1726513937523-79df530a1542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjIxNjZ8MHwxfGFsbHw0fHx8fHx8fHwxNzI4MzMyOTczfA&ixlib=rb-4.0.3&q=80&w=400" alt="Our Office" width={300} height={300} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}