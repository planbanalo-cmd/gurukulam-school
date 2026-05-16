'use client';

import { useState } from 'react';
import { User, Phone, Mail, School, MapPin, Upload } from 'lucide-react';

export default function ApplyOnlinePage() {
  const [formData, setFormData] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const classAgeMap: any = {
    "Pre-Primary": 3,
    "Nursery": 3,
    "LKG": 4,
    "UKG": 5,
    "1": 6,
    "2": 7,
    "3": 8,
    "4": 9,
    "5": 10,
    "6": 11,
    "7": 12,
    "8": 13,
    "9": 14,
    "10": 15,
    "11": 16,
    "12": 17,
  };
  const calculateAge = (dob: string) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const age = calculateAge(formData.dob);
    const requiredAge = classAgeMap[formData.classApplying];

    if (!formData.classApplying) {
      setError("Please select a class");
      return;
    }

    if (!formData.dob) {
      setError("Please select Date of Birth");
      return;
    }

    if (age < 3) {
      setError("Minimum age must be 3 years");
      return;
    }

    if (requiredAge && age < requiredAge) {
      setError(`Minimum age for Class ${formData.classApplying} is ${requiredAge} years`);
      return;
    }

    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const phone = "919996009098";

    const message = `Hello Gurukulam The School,
I have submitted an admission enquiry.

Parent Name: ${formData.parentName || ''}
Phone: ${formData.phone || ''}
Email: ${formData.email || ''}

Student Name: ${formData.studentName || ''}
Class: ${formData.classApplying || ''}

Please guide me with next steps.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#eef5f1,#e4efe8,#f6faf7)] py-14 px-4 md:px-10">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#156445]">
            Apply Online
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Start your child’s journey with
            <span className="font-semibold text-[#156445]"> Gurukulam The School</span>
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-10 space-y-10 border border-[#156445]/20"
        >

          {/* Parent Details */}
          <div>
            <h2 className="section-title">Parent / Guardian Details</h2>
            <div className="grid md:grid-cols-2 gap-5">

              <div className="input-group">
                <User size={18} />
                <input name="parentName" placeholder="Full Name*" onChange={handleChange} required />
              </div>

              <div className="input-group">
                <Phone size={18} />
                <input name="phone" placeholder="Phone Number*" onChange={handleChange} required />
              </div>

              <div className="input-group md:col-span-2">
                <Mail size={18} />
                <input name="email" placeholder="Email Address*" onChange={handleChange} required />
              </div>

            </div>
          </div>

          {/* Student Details */}
          <div>
            <h2 className="section-title">Student Details</h2>
            <div className="grid md:grid-cols-2 gap-5">

              <div className="input-group">
                <User size={18} />
                <input name="studentName" placeholder="Student Name*" onChange={handleChange} required />
              </div>

              <div className="input-group">
                <input type="date" name="dob" onChange={handleChange} required />
              </div>

              <div className="input-group">
                <School size={18} />
                <select name="classApplying" onChange={handleChange} required>
                  <option value="">Select Class*</option>
                  {[
                    "Pre-Primary", "Nursery", "LKG", "UKG",
                    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
                  ].map((cls, i) => (
                    <option key={i} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <School size={18} />
                <input name="previousSchool" placeholder="Previous School Name" onChange={handleChange} />
              </div>

            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="section-title">Address Details</h2>
            <div className="grid md:grid-cols-2 gap-5">

              <div className="input-group">
                <MapPin size={18} />
                <input name="city" placeholder="City" onChange={handleChange} />
              </div>

              <div className="input-group">
                <MapPin size={18} />
                <input name="state" placeholder="State" onChange={handleChange} />
              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                onChange={handleChange}
                className="textarea md:col-span-2"
              />

            </div>
          </div>

          {/* Additional */}
          <div>
            <h2 className="section-title">Additional Information</h2>
            <textarea
              name="message"
              placeholder="Message / Query"
              onChange={handleChange}
              className="textarea"
            />
          </div>

      
          

          {/* Submit */}
          <button className="submit-btn">
            Submit Application
          </button>

        </form>

        {/* SUCCESS MODAL */}
        {submitted && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-2xl">

              <h2 className="text-2xl font-bold text-[#156445] mb-3">
                🎉 Application Submitted!
              </h2>

              <p className="text-gray-600 mb-6">
                Our admissions team will contact you within 24–48 hours.
                For faster response, continue on WhatsApp.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-[#156445] to-[#0D6453] text-white py-3 rounded-lg font-semibold hover:opacity-90"
                >
                  Continue on WhatsApp
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-gray-500 hover:text-[#156445]"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* FOOT */}
        <div className="text-center mt-10 text-gray-700">
          <p className="font-semibold text-[#156445]">Need Help?</p>
          <p>📞 9996009098 | 9996007479</p>
          <p>📍 Rewari, Haryana</p>
          <p className="text-red-600 font-semibold mt-2">
            Limited Seats Available – Apply Now!
          </p>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .section-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #156445;
        }
          .input-group select {
  width: 100%;
  outline: none;
  background: transparent;
  color: #1f2937;
  font-weight: 500;
}

        .input-group {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid #d1d5db;
          padding: 12px 14px;
          border-radius: 12px;
          background: #ffffff;
          transition: 0.25s;
        }

        .input-group svg {
          color: #156445;
          min-width: 18px;
        }

        .input-group input {
          width: 100%;
          outline: none;
          background: transparent;
          color: #1f2937;
          font-weight: 500;
        }

        .input-group input::placeholder {
          color: #6b7280;
          opacity: 1;
        }

        .input-group:focus-within {
          border-color: #156445;
          box-shadow: 0 0 0 2px rgba(21, 100, 69, 0.15);
        }

        .textarea {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1.5px solid #d1d5db;
          height: 110px;
          color: #1f2937;
          font-weight: 500;
          background: white;
        }

        .textarea::placeholder {
          color: #6b7280;
        }

        .textarea:focus {
          border-color: #156445;
          box-shadow: 0 0 0 2px rgba(21, 100, 69, 0.15);
          outline: none;
        }

        .upload-box {
          border: 2px dashed #cbd5e1;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: 0.2s;
          background: #f6faf7;
        }

        .upload-box:hover {
          border-color: #156445;
          background: #eef5f1;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg,#156445,#0D6453);
          color: white;
          font-weight: 600;
          font-size: 16px;
          transition: 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>

    </div>
  );
}