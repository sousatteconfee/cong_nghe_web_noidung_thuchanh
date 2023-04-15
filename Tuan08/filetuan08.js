$(document).ready(function(){
    var i=1;
    $("#myBth").on("lick", function(){
        $("#myModal").modal();
    });
    //kiem tra ma tour theo mau
    var txtMa=$("#txtMa");
    var tbMa=$("#tbMa");
    function KiemTraMa(){
        var re=/ ^ [A-Z]{3} \ - [A-Z]{3} \ -d{2}\ - \d{4}$/;
        if(txtMa.val()==""){
            tbMa.html("* Bắt buộc nhập");
            return false;
        }

        if(!re.test(txtMa.val())){
            tbMa.html("* Mã tour theo mẫu: xxx-xxx-00-00000");
            return false;
        }

        tbMa.html("*");
        return true;
    }
    txtMa.blur(KiemTraMa);
    // kiem tra diem den

    var txtDiemDen=$("#txtDiemDen");
    var tbDiemDen=$("#tbDiemDen");
    function KiemTraDD(){
        if(txtDiemDen.val()==""){
            tbDiemDen.html("* Bắt buộc nhập");
            return false;
        }

        tbDiemDen.html("*");
        return true;
    }

    txtDiemDen.blur(KiemTraDD);
    //kiem tra ngay khoi hanh, phai sau ngay thuc hien

    var txtNgay=$("#txtNgay");
    var tbNgay=$("#tbNgay");
    function KiemTraNgayKH(){
        if(txtNgay.val()==""){
            tbNgay.html("* Bắt buộc nhập");
            return false;
        }

        var day=new Date(txtNgay.val());
        var today=new Date();
        today.setDate(today.getDate() + 30);
        if(day<today){
            tbNgay.html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        tbNgay.html("*");
        return true;
    }
    txtNgay.blur(KiemTraNgayKH);

    //kiem tra gia tour
    var txtGia=$("#txtGia");
    var tbGia=$("#tbGia")
    function KiemTraGia(){
        var gia=txtGia.val();
        if(gia==""){
            tbGia.html("* Bắt buộc");
            return false;
        }
        if(isNaN(gia)){
            tbGia.html("* Phải nhập số");
            return false;
        }
        if(eval(gia)<=0){
            tbGia.html("* Phải nhập số lớn hơn 0");
            return false;
        }
        tbGia.html("*");
        return true;
    }
    txtGia.blur(KiemTraGia);

    $("#btnSave").click(function(){
        if(!KiemTraMa() || !KiemTraDD() || !KiemTraNgayKH() || !KiemTraGia()){
            $("#thongbao").html("Mời bạn nhập đầy đủ thông tin");
            return false;
        }
        var matour=txtMa.val();
        var diemden=txtDiemDen.val();
        var tg=$("#txtTG").val();
        var gia=txtGia.val();
        var anh=$("#txtAnh").val().substring(12);
        var them="</tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh + "</td><td>" +
            tg + "</td><td>" + gia + "</td><td>" + anh + "</td></tr>";
        $("table tbody").append(them);
        $("myModal").modal("hide");
        return true;
    });
    $("#bbtnSave").click(function(){
        if(!KiemTraMa() || !KiemTraDD() || !KiemTraNgayKH() || !KiemTraGia()){
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        var matour=txtMa.val();
        var diemden=txtDiemDen.val();
        var ngaykh=txtNgay.val();
        var tg=$("#txtTG").val();
        var gia=txtGia.val();
        var anh=$("#ttxtAnh").val().substring(12);
        var them="</tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh + "</td><td>" +
            tg + "</td><td>" + gia + "</td><td>" + anh + "</td></tr>";
        $("table tbody").append(them);
        $("myModal").modal("hide");
        return true;
    });
});