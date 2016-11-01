package cn.ucai.helloandroid;

import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void btnClickedHandler(View view) {
        new AlertDialog.Builder(this)
                .setTitle("标题")
                .setMessage("这是内容")
                .setPositiveButton("Close", null)
                .show();
    }
}
