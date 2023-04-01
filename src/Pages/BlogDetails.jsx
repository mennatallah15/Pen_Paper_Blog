import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogDetails() {
  const { postid } = useParams();

  const [form, setForm] = useState({
    title: "",
    discription: "",
    photo: "",
    category: "",
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/posts/${postid}`);
      console.log(data);
      setForm({
        title: data.title,
        discription: data.discription,
        photo: data.photo,
        category: +data.category,
      });
      console.log(form);
    }

    fetchPostById();
  }, []);
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src={form.photo}
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold text-amber-900">
              {form.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500 text-black">
              {form.discription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
